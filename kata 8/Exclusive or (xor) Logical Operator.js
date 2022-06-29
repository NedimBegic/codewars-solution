/* In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) 
called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans.
 It then returns true if exactly one of the two expressions are true, false otherwise. */
function xor(a, b) {
    console.log(a,b)
    if (a&&b||!a&&!b) {
      return false;
    }else if (a||b){
      return true
    }
  }