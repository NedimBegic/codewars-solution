/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer" */
function getDrinkByProfession(param){
    let param1= param.toLowerCase();
  
    switch (true) {
        case param1=="jabroni":
        return "Patron Tequila";
        case param1=="school counselor":
        return "Anything with Alcohol";
        case param1=="programmer":
        return "Hipster Craft Beer";
        case param1=="bike gang member":
        return "Moonshine";
        case param1=="politician":
        return "Your tax dollars";
        case param1=="rapper":
        return "Cristal";
        default:
        return "Beer";    
    }
  }