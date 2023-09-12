// Skills practiced: function expression, template literals, toUpperCase(), return keyword
var shoutIt = function (name) {
    var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
    return shout;
  };
  console.log(shoutIt("Sarah"));
  console.log(shoutIt("Mark"));
  console.log(shoutIt("Abdul"));
  
  // Skills practiced: function expression, return keyword, typeof operator, arithmetic operator, comparison operator, integers, floating point numbers, strings
  var multiply = function(num1, num2) {
    if (typeof num1 !== "number") {
      return "Oops! Looks like you forgot to enter a number. Try again.";
    } else if (typeof num2 !== "number") {
      return "Oops! Looks like you forgot to enter a number. Try again.";
    };
    return num1 * num2;
  };
  console.log(multiply(3,5));
  console.log(multiply("hi", "hello"));
  console.log(multiply("4", "hello"));
  console.log(multiply("hi", "9"));
  