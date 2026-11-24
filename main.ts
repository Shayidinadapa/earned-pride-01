// One Line of Earned Pride — make.fun entry.
// Writes a single line (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride for someone in a scene,
// a long effort finally landing in one read.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He'd practiced the same three chords in the garage for six years; " +
  "tonight his daughter danced to them in the kitchen and never knew they were hers.";

const chars = [...LINE].length;
if (chars < 1 || chars > 240) {
  throw new Error(`entry must be 1-240 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
