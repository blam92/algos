let largestSubArray = (array) => {
  let global = [0,0];
  let globalSum = array[0];

  let current = [0,0];
  let currentSum = array[0];

  for(let i = 1; i < array.length; i++) {
    currentSum = Math.max(currentSum + array[i], array[i]);
    if(currentSum === array[i]) {
      current = [i, i];
    } else {
      current[1] = i;
    }

    if(currentSum > globalSum) {
      globalSum = currentSum;
      global = [...current];
    }
  }
  return array.slice(global[0], global[1] + 1);
}

console.log(largestSubArray([9, -3, 2, 2, -1]));