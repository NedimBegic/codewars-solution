// Write a function which calculates the average of the numbers in a given list.

const find_average = array => array.length===0 ? 0 : array.reduce((x,y)=>x+y)/array.length;
