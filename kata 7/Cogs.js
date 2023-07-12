/* Kata Task
You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 75] means

1st cog has 100 teeth
2nd cog has 75 teeth
If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?

(use negative numbers for anti-clockwise rotation)

Notes
no two cogs share the same shaft */
function cogRpm(cogs) {
  let lastRpm = 1;

  for (let i = 0; i < cogs.length - 1; i++) {
    let first = i % 2 === 0 ? cogs[i] : -cogs[i];
    let second = (i + 1) % 2 === 0 ? cogs[i + 1] : -cogs[i + 1];
    lastRpm = (first * lastRpm) / second;
  }

  return lastRpm;
}
