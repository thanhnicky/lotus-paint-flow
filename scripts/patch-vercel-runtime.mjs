import { readFileSync, writeFileSync, existsSync, renameSync } from "fs";

const outputDir = ".vercel/output";
const oldFuncDir = `${outputDir}/functions/__server.func`;
const newFuncDir = `${outputDir}/functions/ssr.func`;
const configPath = `${outputDir}/config.json`;

if (existsSync(oldFuncDir)) {
  // Rename __server.func to ssr.func to avoid Vercel internal route conflicts
  renameSync(oldFuncDir, newFuncDir);
  console.log("Renamed __server.func -> ssr.func");

  // Patch .vc-config.json
  const vcConfigPath = `${newFuncDir}/.vc-config.json`;
  if (existsSync(vcConfigPath)) {
    const vcConfig = JSON.parse(readFileSync(vcConfigPath, "utf8"));
    vcConfig.runtime = "nodejs20.x";
    vcConfig.supportsResponseStreaming = false;
    writeFileSync(vcConfigPath, JSON.stringify(vcConfig, null, 2));
    console.log("Patched .vc-config.json: runtime=nodejs20.x, streaming=false");
  }

  // Update config.json routes to point to /ssr instead of /__server
  if (existsSync(configPath)) {
    const config = JSON.parse(readFileSync(configPath, "utf8"));
    const configStr = JSON.stringify(config);
    const patched = configStr.replaceAll("/__server", "/ssr");
    writeFileSync(configPath, patched);
    console.log("Patched config.json: /__server -> /ssr");
  }
} else {
  console.warn("No __server.func found, skipping patch.");
}
