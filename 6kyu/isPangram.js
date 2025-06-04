/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

function isPangram(string) {
  var regex = /([a-z])(?!.*\1)/gi;
  return (string.match(regex) || []).length === 26;
}

//test

const test = isPangram("oiwrhgobv ediwjne");
const test2 = isPangram("abcdefghijklmnopqrstuvwxyz");
console.log(test);
console.log(test2);