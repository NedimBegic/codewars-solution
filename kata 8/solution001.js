
// Paper, Rock, Scissors

const rps = (p1, p2) => {
    let p1Won = "Player 1 won!";
    let p2Won = "Player 2 won!";
    let draw = "Draw!";
   
   if((p1 === 'scissors'&& p2==='paper')||(p1==='rock'&&p2==='scissors')||(p1==='paper'&&p2==='rock')) {
     return p1Won;
   }else if (p1===p2) {
     return draw;
   }else {
     return p2Won;
   }
 
 };