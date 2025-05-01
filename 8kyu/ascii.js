/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

function twoSort(s) {
    let sortedArr = s.sort();
    let result = sortedArr[0].split("").join("***");
    return result;
  }
  
  //test
  console.log(
    twoSort(
      [
        "bitcoin",
        "take",
        "Over",
        "the",
        "world",
        "maybe",
        "who",
        "Knows",
        "perhaps"
      ],
      "b***i***t***c***o***i***n"
    )
  );
  