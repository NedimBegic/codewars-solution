/* Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), 
write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

 */
function elevator(left, right, call){
    if (left == right) return "right";
     
     var leftDistance = Math.abs(call - left);
     var rightDistance = Math.abs(call - right);
     
     return leftDistance < rightDistance ? "left":"right";
     }