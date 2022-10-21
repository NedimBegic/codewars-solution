/* Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left. */
function drawStairs(n) {
  let content = "I";
  for(let i = 1; i<n; i++) {
    content += "\n" + " ".repeat(i) + "I";
  };
return content;
};