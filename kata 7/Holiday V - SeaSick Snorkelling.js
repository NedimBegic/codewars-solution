/* Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Changes from calm to wave or wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that number is more than 20% of the length of the string, return "Throw Up", else return "No Problem". */
function seaSick(x) {
  let change = 0;
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] != x[i + 1]) {
      change++;
    }
  }
  return change > x.length * 0.2 ? "Throw Up" : "No Problem";
}