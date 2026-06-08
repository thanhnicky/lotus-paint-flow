import { readFileSync, writeFileSync, existsSync } from "fs";

const vcConfigPath = ".vercel/output/functions/__server.func/.vc-config.json";

if (existsSync(vcConfigPath)) {
  const config = JSON.parse(readFileSync(vcConfigPath, "utf8"));
  config.runtime = "nodejs20.x";
  writeFileSync(vcConfigPath, JSON.stringify(config, null, 2));
  console.log("Patched .vc-config.json: runtime set to nodejs20.x");
} else {
  console.warn("No .vc-config.json found, skipping patch.");
}
