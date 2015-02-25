// Here is our initial setup. We have a simple function which
// changes the inner text of a node to a string.
//
// It depends on jQuery to manipulate the element.
function foo() {
  return $('.baz').text('bar');
}

// This pattern is weak as it polutes the global scope, and
// depends on jQuery existing in the global scope.
//
// To solve for this, we can wrap up the function
// in an IIFE (Immediately Invoked Function Expression).
// The IIFE should return the created function.
//
// To immediately call a constructed function and get its result,
// the function is wrapped in parenthesis
(function () {
  return function foo() {
    // ...
  };
  // the closing parenthese contains a set of parenthesis which
  // singals for the function to be called.
}());

// The IIFE allows us to pass in parameters via the
// closing parenthesis. This allows us to declare dependencies
// and remap them to more strategic names.
(function ($) {
  return function foo() {
    // ...
  };
}(jQuery));

// The result of an IIFE can be as assigned to a variable for use.
// This allows use of the exported code while protecting its structure.
var foo = (function ($) {
  // ..
}(jQuery));
