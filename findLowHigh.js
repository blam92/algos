let findLowHigh = (array, target) => {
  let firstTarget = binarySearch(array, target);
  if(firstTarget === -1) return -1;

  let left = firstTarget;
  let right = firstTarget;
  let min = firstTarget;
  let max = firstTarget;

  while(array[left] === array[firstTarget] || array[right] === array[firstTarget]) {
    if(array[left] - 1 !== array[firstTarget] && array[left] === array[firstTarget]) {
      min = left;
    }

    if(array[right] + 1 !== array[firstTarget] && array[right] === array[firstTarget]) {
      max = right;
    }


    right++;
    left--;
  }

  return [min, max];
}

let binarySearch = (array, target) => {
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while(minIndex <= maxIndex) {
    let currentIndex = Math.floor((minIndex + maxIndex) / 2);

    if(array[currentIndex] > target) {
      maxIndex = currentIndex - 1;
    } else if(array[currentIndex] < target) {
      minIndex = currentIndex + 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

console.log(findLowHigh([1, 2, 3, 3, 4, 5, 5, 5], 2));