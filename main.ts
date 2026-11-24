import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "Are you a CAPTCHA? Because I can't prove I'm not a robot around you.";
// Winner D13 (24/25, 18 drafts): the CAPTCHA inversion is the freshest angle —
// a robot forced to prove it is NOT a robot — and the classic "Are you a...?"
// shape makes it unmistakably a pickup line, not just a robot joke.

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
