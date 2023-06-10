/* Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer'] */
function sortArray(a1, a2) {
  let letters = a1.map((e) => e[0]);
  let b = [];
  for (let i = 0; i < a1.length; i++) {
    let indexOfB = letters.indexOf(a2[i][0]);
    b[indexOfB] = a2[i];
  }

  return b;
}
