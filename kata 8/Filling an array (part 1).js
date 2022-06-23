/* We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it. */
const arr = N => {
    let ary = [];
    for (let i = 0;i<N;i++) {
      ary.push(i)
    };
    return ary;
  }