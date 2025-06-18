/*In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.*/

function calculate(str) {
  let newString = str.replace(/plus/g, '+').replace(/minus/g, '-');
  let result = eval(newString);
  return result.toString();
}

console.log(calculate('2plus5minus1plus10'))


