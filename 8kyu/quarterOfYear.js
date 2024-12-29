//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

function findQuarterOfYear(month) {
    let quarter;
    if (month === 1 || month === 2 || month === 3) {
      return (quarter = 1);
    } else if (month === 4 || month === 5 || month === 6) {
      return (quarter = 2);
    } else if (month === 7 || month === 8 || month === 9) {
      return (quarter = 3);
    } else {
      return (quarter = 4);
    }
  }
  
  console.log(findQuarterOfYear(11));
  