//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//Notes:

//If either input is an empty string, consider it as zero.

//Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumOfStrings(n1, n2) {
    return (Number(n1 || 0) + Number(n2 || 0)).toString();
  }