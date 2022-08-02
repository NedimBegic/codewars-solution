/* You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return the middle
 2 characters. */
function getMiddle(s)
{
let middle = (s.length-1)/2;
  if(s.length%2!==0) {
    let one = s[middle];
    return one;
  }else{
    let two = s[Math.floor(middle)]+s[Math.ceil(middle)]
    return two;
  }
}