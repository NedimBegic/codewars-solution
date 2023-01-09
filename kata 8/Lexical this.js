/* Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object. */
var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) { 
        this._friends.push(...f)
      }
    }
    return person;
  }