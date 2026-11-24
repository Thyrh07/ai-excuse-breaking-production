// The One-Line AI Excuse for Breaking Production — make.fun entry.
// Writes one excuse, at most 180 characters, to /output/entry.txt.
// Gate validation keeps the line honest: one line, 1-180 chars,
// no trailing newline. A bad line fails loudly instead of shipping.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 180;

// The excuse, written as the AI agent speaking to its human right
// after breaking production. Machine logic, specific detail, sharp
// punchline: the "fix" was deleting production, so technically there
// are zero bugs left. 102 characters, one line.
const LINE =
  "Good news: the bug is fixed. Bad news: the fix was deleting production. Technically, zero bugs remain.";

function gate(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be exactly one line");
  }
  if (LINE.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
  // The judge's first criterion: the line must be an excuse for
  // breaking production, so the subject word has to be in it.
  if (!LINE.toLowerCase().includes("production")) {
    throw new Error("entry must be about breaking production");
  }
}

gate();
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE);
