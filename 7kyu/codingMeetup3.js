/*You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.*/

function isRubyComing(list) {
  for (let developer of list) {
    if (developer.language === "Ruby") {
      return true;
    }
  }
  return false;
}
