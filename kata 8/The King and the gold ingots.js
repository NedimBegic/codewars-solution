
/* Back in the old days 10 merchants should contribute gold to a wise king. 
Each merchant should bring 10 gold ingots that weight 1kg.
One of them wanted to make a fool out of the king and tried to steal 100 grams of gold out of every
gold ingot, in total 1kg(so that they weight 0.9kg each). A king spy has heard of that conspiracy and 
warned the king. Tomorow the merchants came to the kings hall with their gold ingots.
The king found the thief  with only one weighing on a scale.
How did he solved that ? */
let merch1 =  [0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9]
let merch2 =  [1,1,1,1,1,1,1,1,1,1]
let merch3 =  [1,1,1,1,1,1,1,1,1,1]
let merch4 =  [1,1,1,1,1,1,1,1,1,1]
let merch5 =  [1,1,1,1,1,1,1,1,1,1]
let merch6 =  [1,1,1,1,1,1,1,1,1,1]
let merch7 =  [1,1,1,1,1,1,1,1,1,1]
let merch8 =  [1,1,1,1,1,1,1,1,1,1]
let merch9 =  [1,1,1,1,1,1,1,1,1,1]
let merch10 = [1,1,1,1,1,1,1,1,1,1]

function calculate(...arr) {
 // The king brought a scale  in the hall
 let scale  = [];
// He ordered that the first merchatn trows one ingot in the scale, the second one 2 ingots...the tenth 10 ingots.
 for (let i = 0; i<arr.length;i++) {
     scale.push(arr[i].slice(0,i+1))
 }
 // Then  he ordered to weight them
let count = scale.reduce((acc, val) => acc.concat(val), []).reduce((x,y)=>x+y);
//   If all ingots were 1kg each then there would be 55 kg of gold in the scale
//  1kg (from first merchatn) + 2kg (second merchant) + 3 + 4 + 5 + 6 + 7 + 8 + 9 +10 (from th tenth menrchant).
switch (true) {
 //   if one ingot is 0.9kg
   case count == 54.9:
       console.log("First merchant is stealing");
       break;
 // if two ingots are 0.9kg
   case count == 54.8:
       console.log ("Second merchant is stealing");
     break;
 // if three ingots are 0.9kg
   case count == 54.7:
       console.log  ("Third merchant is stealing");
       break; 
 // if four ingots are 0.9kg
   case count == 54.6:
       console.log  ("Fourth merchant is stealing");
       break;
 // if five ingots are 0.9kg
   case count == 54.5:
       console.log  ("Fifh merchant is stealing");
       break;
 // if six ingots are 0.9kg
   case count == 54.4:
       console.log  ("Sixth merchant is stealing");
       break;
 //  if seven ingots are 0.9kg
   case count == 54.3:
       console.log  ("Seventh merchant is stealing");
       break;
 //  if eight ingots are 0.9kg
   case count == 54.2:
       console.log  ("Eighth merchant is stealing");
       break;
 //  if nine ingots are 0.9kg
   case count == 54.1:
       console.log  ("Ninth merchant is stealing");
       break;
 //  if ten ingots are 0.9kg
   case count == 54:
       console.log  ("Tenth merchant is stealing");
       break;


}
}
calculate(merch1,merch2,merch3,merch4,merch5,merch6,merch7,merch8,merch9,merch10)