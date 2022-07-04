/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones. */
function noBoringZeros(n) {
    let arr = n.toString().split("");
    while(arr[arr.length-1]=="0") {
      arr.pop()
    };
    let str = arr.join("");
    return +str
  }