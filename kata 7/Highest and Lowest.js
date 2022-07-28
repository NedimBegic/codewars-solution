/* In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number. */
function highAndLow(numbers){
    let arr = numbers.split(" ").sort((x,y)=>x-y)
  return [arr[arr.length-1],arr[0]].join(" ")
}