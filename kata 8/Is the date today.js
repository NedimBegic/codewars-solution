/* Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

 */
const isToday = (date) => {
  const par = "" + date;
  const today = "" + new Date();
  return par.slice(0, 16) === today.slice(0, 16);
};
