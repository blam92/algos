let findSmallestCommonNumber = (firstArr, secondArr, thirdArr) => {
  let f = 0;
  let s = 0;
  let t = 0;

  while(firstArr[f] !== undefined && secondArr[s] !== undefined && thirdArr[t] !== undefined) {
    if(firstArr[f] === secondArr[s] && firstArr[f] === thirdArr[t]) {
      return firstArr[f];
    }

    let smallest = Math.min(firstArr[f], secondArr[s], thirdArr[t]);
    
    if(smallest === firstArr[f]) {
      f++;
    } else if(smallest === secondArr[s]) {
      s++;
    } else {
      t++;
    }
  }
  return null;
}

console.log(findSmallestCommonNumber([0, 1, 2, 3, 4], [-1, 2, 3], [0, 1, 2]));