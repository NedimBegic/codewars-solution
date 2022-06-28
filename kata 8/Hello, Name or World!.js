/* * With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!" */
function hello(name) {

    if (name==""||name==undefined) {
      return "Hello, World!"
    }else {
     let first = name[0].toUpperCase();
      let num = name.length;
      let other = name.slice(1,num).toLowerCase();
      return "Hello, "+first+other+"!";
      
    }
  }