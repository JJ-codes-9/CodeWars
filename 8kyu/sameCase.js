/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 08*/

function sameCase(a, b) {
    // Check if both characters are letters
    if (!a.match(/[a-zA-Z]/) || !b.match(/[a-zA-Z]/)) {
      return -1; // Either character is not a letter
    }
  
    // Check if both characters are the same case
    if (
      (a === a.toUpperCase() && b === b.toUpperCase()) ||
      (a === a.toLowerCase() && b === b.toLowerCase())
    ) {
      return 1; // Same case
    }
  
    // If they are letters but not the same case
    return 0;
  }