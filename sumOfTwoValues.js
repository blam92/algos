let sumOfTwoValues = (numbers, targetSum) => {
  let results = {};
  let numberHashTable = {};

  numbers.forEach((num) => {
    numberHashTable[num] = true;
  });
  numbers.forEach((num) => {
    let sumNeeded = targetSum - num;
    if(num === sumNeeded) return;
    if(numberHashTable[sumNeeded]) {
      if(sumNeeded < num) {
        results[JSON.stringify([sumNeeded, num])] = true;
      } else {
        results[JSON.stringify([num, sumNeeded])] = true;
      }
    }
  });
  return Object.keys(results).map(twoSums => JSON.parse(twoSums));
}

console.log(sumOfTwoValues([5, 7, 1, 2, 8, 4, 3], 10));