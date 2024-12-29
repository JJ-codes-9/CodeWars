//flatten a two dimensional array and sort it and output should be like: 5>4>3>2>1 etc
function bigToSmall(arr) {
    let result = []
      .concat(...arr)
      .sort((a, b) => b - a)
      .join(">");
    return result;
  }
  
  console.log(
    bigToSmall([
      [1, 2],
      [3, 4],
      [5, 6]
    ])
  );