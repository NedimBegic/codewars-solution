/* You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
In C# and Java the mean return is a double. */
function mean(lst) {
  let str = "";
  let num = 0;
  lst.map((e) => {
    if (e.match(/[0-9]/)) {
      num += +e;
    } else {
      str += e;
    }
  });
  return [num / 10, str];
}