/* Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers */
const multiply = number => {
    let leng = Math.sign(number)==-1 ? (""+number).length-1 :("" + number).length;
    return number * Math.pow(5,leng);
  }