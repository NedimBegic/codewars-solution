// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let double = "" ;
    for( let i = 0;i<str.length;i++) {
    double += str[i].repeat(2)
    }
    return double;
  }