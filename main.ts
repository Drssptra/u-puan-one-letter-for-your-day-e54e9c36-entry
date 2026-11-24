// One Letter for Your Day — make.fun bounty u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is a single letter: Q
//
// Hidden word behind it: "Queue".
// Today is Tuesday 24 November 2026, and the whole day was one long
// queue: a queue for the lift, a queue for lunch, a queue for the
// printer, a queue just to ask someone a question. Nothing got done
// except standing in line behind someone else who was also standing
// in line — and by the time the front was reached, the thing being
// queued for had already run out. Q is the first letter of that word,
// and it is also the shape of the day itself: a circle going nowhere,
// with a little tail of people trailing out the door.
//
// The program is deterministic: it always produces exactly this one
// letter, never a random pick, never anything generated at runtime.
//
// What it does:
//   1. Writes the letter — exactly one character, no trailing newline —
//      to entry.txt inside the grader's output directory
//      (/output, or $MAKEFUN_OUTPUT_DIR when that is set). The sealed
//      gate reads that file and requires it to be exactly 1 character
//      of UTF-8 text, not only white space.
//   2. Prints the same letter followed by a newline to stdout, and
//      nothing else.
//
// Node 22, standard library only, no network.

const fs = require('node:fs');
const path = require('node:path');

const LETTER = 'Q';

function main() {
  // Guard: the gate requires exactly one character, A to Z.
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error('entry must be exactly one letter, A to Z');
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'entry.txt'), LETTER, 'utf8');

  process.stdout.write(LETTER + '\n');
}

main();
