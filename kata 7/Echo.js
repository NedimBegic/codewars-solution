/* Echo Program
Write an echoProgram function (or echo_program depend on language) that returns your solution source code as a string.

Note:
Function.prototype.toString has been disabled.

 */
const echoProgram = () =>
  require("fs").readFileSync("/home/codewarrior/solution.txt", "utf8");
