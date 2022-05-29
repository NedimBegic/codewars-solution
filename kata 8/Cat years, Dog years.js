// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    let arr = [humanYears,0,0]
    let catOverTwo = 24;
    let dogOverTwo = 24;
     if ( humanYears ===1) {
       arr[1] += 15;
       arr[2] += 15;
     }else if (humanYears ===2) {
       arr[1] +=15 + 9;
       arr[2] +=15 + 9;
     }else {
        for (let i = 3; i<=humanYears;i++) {
          catOverTwo += 4;
          dogOverTwo += 5;
          arr[1] = catOverTwo;
          arr[2] = dogOverTwo;
        }
    
     } return arr
  }