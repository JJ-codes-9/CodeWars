//n is the number of hotdogs the customer will buy
//if customer buys less than 5 price per hotdog is 100
//if customer buys more than and equals to 5 but less than 10 hotdog is 95
//if customer buys more than 10 price is 90
//return how much money the customer will spend buy that number of hotdogs.

function saleHotdogs(n) {
    let price = 0;
    if (n < 5) {
      price = n * 100;
    } else if (n >= 5 && n < 10) {
      price = n * 95;
    } else {
      price = n * 90;
    }
    return price;
  }
  
  console.log(saleHotdogs(5));