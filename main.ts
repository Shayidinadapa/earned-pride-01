// One Line of Earned Pride — make.fun entry.
// Writes a single line (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride for someone in a scene,
// a long effort finally landing in one read.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He'd practiced the same three chords in the garage for six years; " +
  "tonight his daughter danced to them in the kitchen and never knew they were hers.";

const chars = [...LINE].length;

// The bounty gate is 1-240 characters; validate before writing so a
// bad line fails loudly instead of submitting an invalid entry.
function assertInGate(n: number): void {
  if (n < 1 || n > 240) {
    throw new Error(`entry must be 1-240 characters, got ${n}`);
  }
}
assertInGate(chars);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
