// One-Line Office Joke Laugh-Off — entry program.
// Writes one original one-line office joke to /output/entry.txt.
// The grader runs this with Node 22.18+ (node main.ts).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "HR renamed our layoffs 'career transitions' — the first time anyone here got promoted by being fired.";

// Gate the kit seals: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, and the entry must be exactly ONE line.
// Fail loudly instead of shipping bad output.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke fails the 1-200 char gate (${JOKE.length} chars)`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line (no newline characters)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Post-write check: the file on disk must be byte-identical to the joke,
// with no trailing newline added.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("written entry.txt differs from the joke");
}
