/* Simple challenge - eliminate all bugs from the supplied code so that the code runs 
and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word. */

const findLongest = str => str.split(" ").reduce((x,y)=> x.length>y.length?x:y).length
