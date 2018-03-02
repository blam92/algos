let largestSubArray = (array) => {
  let global = [array[0]];
  let globalSum = array[0];

  let current = [array[0]];
  let currentSum = array[0];

  for(let i = 1; i < array.length; i++) {
    currentSum = Math.max(currentSum + array[i], array[i]);
    if(currentSum === array[i]) {
      current = [array[i]];
    } else {
      current.push(array[i]);
    }

    if(currentSum > globalSum) {
      globalSum = currentSum;
      global = [...current];
    }
  }
  return global;
}

console.log(largestSubArray([1, -3, 2, 1, -1]));