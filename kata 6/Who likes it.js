/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */
function likes(names) {
  let str = "like this";
  if (names.length == 0) {
    return `no one likes this`;
  }
  let nP = names.length;
  switch (nP) {
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} ${str}`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} ${str}`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${nP - 2} others ${str}`;
      break;
  }
}
