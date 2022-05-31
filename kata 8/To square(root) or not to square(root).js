// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

const squareOrSquareRoot = array => {
    return ( array.map(x => {
      if (Math.sqrt(x)%1==0) {
          return Math.sqrt(x)
      }else {
         return Math.pow(x,2)
      }
    }))
  }