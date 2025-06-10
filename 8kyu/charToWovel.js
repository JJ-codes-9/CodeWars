/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.*/

function isVow(a) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return a.map((code) => {
    const char = String.fromCharCode(code);
    return vowels.includes(char) ? char : code;
  });
}
