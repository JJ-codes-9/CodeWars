/*Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.*/

function booleanToString(b) {
  if (b == true) {
    return "true";
  } else {
    return "false";
  }
}

//test
console.log(
  booleanToString(true),
  "true",
  'When we pass in true, we want the string "true" as output'
);