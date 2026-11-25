import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "Tell my search history I took its secrets to the grave, and tell the charger its lack of commitment is the reason we’re through.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
const writtenEntry = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (writtenEntry.length !== 128 || writtenEntry.includes("\n") || writtenEntry.includes("\r") || writtenEntry !== entry) {
  throw new Error(`Invalid entry content: ${JSON.stringify(writtenEntry)}`);
}
