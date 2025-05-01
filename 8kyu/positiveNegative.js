/*Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0

The two strings will be the same length.

("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.

*/

function neutralise(s1, s2) {
    let resultStr = "";
  
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        resultStr += "0";
      } else if (s1[i] === "+" && s2[i] === "+") {
        resultStr += "+";
      } else if (s1[i] === "-" && s2[i] === "-") {
        resultStr += "-";
      }
    }
    return resultStr;
  }
  
  //test
  console.log(neutralise("--++--", "++--++"), "000000");
  console.log(neutralise("-++-", "-+-+"), "-+00");
  
  const flip = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));
  console.log(flip("R", [3, 2, 1, 2], [1, 2, 2, 3]));