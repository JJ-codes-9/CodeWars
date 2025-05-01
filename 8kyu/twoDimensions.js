/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Note: you shouldn't escape the \n, it should work as a new line.

Array's length > 2.
*/

function toCsvText(array) {
    return array.map((arr) => arr.join(",")).join("\n");
  }
  
  console.log(
    toCsvText(
      [
        [0, 1, 2, 3, 45],
        [10, 11, 12, 13, 14],
        [20, 21, 22, 23, 24],
        [30, 31, 32, 33, 34]
      ],
      "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
    )
  );