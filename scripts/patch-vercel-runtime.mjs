import { readFileSync, writeFileSync, existsSync, readdirSync, renameSync } from "fs";
import { resolve, join } from "path";

// Use absolute path to avoid CWD issues on Vercel build servers
const projectRoot = new URL("..", import.meta.url).pathname;
const outputDir = resolve(projectRoot, ".vercel/output");
const funcDir = resolve(outputDir, "functions/__server.func");
const vcConfigPath = resolve(funcDir, ".vc-config.json");
const configPath = resolve(outputDir, "config.json");

console.log(`[patch] CWD: ${process.cwd()}`);
console.log(`[patch] Script dir: ${projectRoot}`);
console.log(`[patch] Output dir: ${outputDir}`);
console.log(`[patch] funcDir exists: ${existsSync(funcDir)}`);
if (existsSync(resolve(outputDir, "functions"))) {
  console.log(`[patch] functions/: ${readdirSync(resolve(outputDir, "functions")).join(", ")}`);
}

if (existsSync(vcConfigPath)) {
  const vcConfig = JSON.parse(readFileSync(vcConfigPath, "utf8"));
  console.log(`[patch] Current runtime: ${vcConfig.runtime}`);
  vcConfig.runtime = "nodejs22.x";
  vcConfig.supportsResponseStreaming = false;
  writeFileSync(vcConfigPath, JSON.stringify(vcConfig, null, 2));
  console.log("[patch] Patched .vc-config.json: runtime=nodejs22.x");
} else {
  console.error("[patch] FATAL: No .vc-config.json found at:", vcConfigPath);
  process.exit(1);
}

// Simplify config.json routing to catch-all only (avoid Vercel route parsing issues)
if (existsSync(configPath)) {
  const config = JSON.parse(readFileSync(configPath, "utf8"));
  config.routes = [
    { src: "/assets/(.*)", headers: { "cache-control": "public, max-age=31536000, immutable" }, continue: true },
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/__server", headers: { "cache-control": "public, max-age=0, must-revalidate" } },
  ];
  writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log("[patch] Patched config.json routes with no-cache for HTML");
}

// Rename JS/CSS assets with -v2 suffix to bust CDN immutable cache,
// then update all references inside the SSR function bundle.
function walkDir(dir, cb) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full, cb);
    else cb(full, entry.name);
  }
}

const staticAssetsDir = resolve(outputDir, "static/assets");
const renameMap = {};

if (existsSync(staticAssetsDir)) {
  for (const name of readdirSync(staticAssetsDir)) {
    const isJs = name.endsWith(".js");
    const isCss = name.endsWith(".css");
    if ((isJs || isCss) && !name.includes("-v2.")) {
      const ext = isJs ? ".js" : ".css";
      const newName = name.slice(0, -ext.length) + "-v2" + ext;
      renameSync(join(staticAssetsDir, name), join(staticAssetsDir, newName));
      renameMap[name] = newName;
      console.log(`[patch] Renamed: ${name} → ${newName}`);
    }
  }
}

if (Object.keys(renameMap).length > 0) {
  walkDir(funcDir, (fullPath) => {
    if (!fullPath.endsWith(".mjs") && !fullPath.endsWith(".js")) return;
    let content = readFileSync(fullPath, "utf8");
    let changed = false;
    for (const [oldName, newName] of Object.entries(renameMap)) {
      if (content.includes(oldName)) {
        content = content.replaceAll(oldName, newName);
        changed = true;
      }
    }
    if (changed) {
      writeFileSync(fullPath, content);
      console.log(`[patch] Updated refs: ${fullPath.split("/").slice(-2).join("/")}`);
    }
  });
  console.log(`[patch] Asset rename complete: ${Object.keys(renameMap).length} files`);
} else {
  console.log("[patch] No assets to rename (already have -v2 suffix or none found)");
}
