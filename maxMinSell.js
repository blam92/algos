let maxMinSell = (stockPrices) => {
  let min = 0;
  let max = 0;
  let maxProfit = stockPrices[1] - stockPrices[0];

  //for returning buy and sell prices
  let globalSell = stockPrices[max];

  while(max < stockPrices.length) {
    max++;
    let currentProfit = stockPrices[max] - stockPrices[min];
    if(currentProfit > maxProfit) {
      maxProfit = currentProfit;

      //for returning buy and sell prices
      globalSell = stockPrices[max];
    }

    if(stockPrices[max] < stockPrices[min]) {
      min = max;
    }
  }


  // return maxProfit;
  return [globalSell - maxProfit, globalSell];
}

console.log(maxMinSell([8, 5, 12, 9, 19, 1]));
console.log(maxMinSell([21, 12, 11, 9, 6, 3]));