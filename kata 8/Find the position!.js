/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */
function position(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let indexPosition = alphabet.indexOf(letter);
    return indexPosition+1;
  }