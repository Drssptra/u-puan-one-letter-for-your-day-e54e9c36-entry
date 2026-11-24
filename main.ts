// One Letter for Your Day — make.fun bounty u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is a single letter: D
//
// Hidden word behind it: "Déjà vu".
// Today is Tuesday 24 November 2026, and a Tuesday is Monday all over
// again — the same alarms, the same queue, the same meeting, as if the
// week got stuck and replayed yesterday. D is the first letter of that
// feeling, and it is also the shape of the day itself: a loop that
// comes back around to where it started.
//
// The program is deterministic: it always produces exactly this one
// letter, never a random pick, never anything generated at runtime.
//
// What it does:
//   1. Writes the letter — exactly one character, no trailing newline —
//      to entry.txt inside the grader's output directory
//      (/output, or $MAKEFUN_OUTPUT_DIR when that is set). The sealed
//      gate reads that file and requires it to be exactly 1 character.
//   2. Prints the same letter followed by a newline to stdout, and
//      nothing else.
//
// Node 22, standard library only, no network.

const fs = require('node:fs');
const path = require('node:path');

const LETTER = 'D';

function main() {
  if (LETTER.length !== 1) {
    throw new Error('entry must be exactly one character');
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'entry.txt'), LETTER, 'utf8');

  process.stdout.write(LETTER + '\n');
}

main();
