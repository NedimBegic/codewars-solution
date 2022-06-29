/* Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more. */
function peopleWithAgeDrink(old) {
    switch (true) {
        case old<14:
        return "drink toddy";
        case old<18:
        return "drink coke";
        case old<21:
        return "drink beer";
        case old >= 21:
        return "drink whisky"
    }
  };