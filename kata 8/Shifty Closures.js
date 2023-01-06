/* Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe? */
var name 
var greet_abe = function() {
  name = "Abe"
  return "Hello, " + name + '!';
};
var greet_ben = function() {
  name = "Ben"

  return "Hello, " + name + '!';
};