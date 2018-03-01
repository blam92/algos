// [4, 5, 7, 8, 1, 2, 3]
let rotatedArraySearch = (target, array) => {
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while(minIndex <= maxIndex) {
    let currentIndex = Math.floor((maxIndex + minIndex) / 2);

    if(target === array[currentIndex]) {
      return currentIndex;
    }

    if(array[currentIndex] > array[minIndex] && target < array[currentIndex] && target >= array[minIndex]) {
      maxIndex = currentIndex - 1;
    } else if(array[currentIndex] < array[maxIndex] && target > array[currentIndex] && target <= array[maxIndex]) {
      minIndex = currentIndex + 1;
    } else if(array[currentIndex] < array[minIndex]) {
      maxIndex = currentIndex - 1;
    } else {
      minIndex = currentIndex + 1;
    }

  }
  return -1;
}

console.log(rotatedArraySearch(5, [7, 8, 1, 2, 3, 4, 5]) === 6);
console.log(rotatedArraySearch(8, [7, 8, 1, 2, 3, 4, 5]) === 1);
console.log(rotatedArraySearch(4, [4, 5, 7, 8, 1, 2, 3]) === 0);
console.log(rotatedArraySearch(5, [4, 5, 7, 8, 1, 2, 3]) === 1);
console.log(rotatedArraySearch(0, [4, 5, 7, 8, 1, 2, 3]) === -1);