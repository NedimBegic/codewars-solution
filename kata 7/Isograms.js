/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */
const isIsogram = str => {
    // make an array to use filter metod
    let arr = str.toLowerCase().split("");
    // filter all letters without duplicates
    let repeatArr = arr.filter((x,i)=>arr.indexOf(x)==i);
    // if both arrays are same length return true
    return repeatArr.length==arr.length ? true:false;
  };