import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "She hums the wrong words to every song while she washes the dishes, and I have never once corrected her, because the wrong words are hers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
