/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */
function distinct(a) {
    let uniqueArray = [];
     for(let i=0; i < a.length; i++){
        if(uniqueArray.indexOf(a[i]) === -1) {
             uniqueArray.push(a[i]);
    }}
       return uniqueArray;
  }