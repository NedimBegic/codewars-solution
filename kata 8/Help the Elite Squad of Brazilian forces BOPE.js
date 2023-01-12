/* The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets */
function magNumber(info) {
  const [gun, street] = info;
  const shots = street * 3;
  let magazineCapacity = 0;

  switch (gun) {
    case "PT92":
      magazineCapacity = 17;
      break;
    case "M4A1":
      magazineCapacity = 30;
      break;
    case "M16A2":
      magazineCapacity = 30;
      break;
    case "PSG1":
      magazineCapacity = 5;
      break;
  }
  let numOfMagazines = Math.ceil(shots / magazineCapacity);

  return numOfMagazines;
}
