/*You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.*/

function countDevelopers(list) {
  let countJSDevsFromEurope = 0;
  for (let developer of list) {
    if (
      developer.continent === "Europe" &&
      developer.language === "JavaScript"
    ) {
      countJSDevsFromEurope++;
    }
  }
  return countJSDevsFromEurope;
}
