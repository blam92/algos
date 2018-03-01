let binarySearch = (array, number) => {
  let maxIndex = array.length - 1;
  let minIndex = 0;
  while(minIndex <= maxIndex) {
    let currentIndex = Math.floor((maxIndex + minIndex) / 2);
    if(array[currentIndex] < number) {
      minIndex = currentIndex + 1;
    } else if(array[currentIndex] > number) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

console.log('Test for odd length array');
console.log(binarySearch([1, 2, 3, 4, 5], 5) === 4);
console.log(binarySearch([1, 2, 3, 4, 5], 1) === 0);
console.log(binarySearch([1, 2, 3, 4, 5], 100) === -1);

console.log('Test for even length array');
console.log(binarySearch([1, 2, 3, 4], 3) === 2);
console.log(binarySearch([1, 2, 3, 4], 1) === 0);
console.log(binarySearch([1, 2, 3, 4], 100) === -1);

// [1, 2, 3, 5]
let binarySearchR = (array, number, maxIndex = array.length - 1, minIndex = 0) => {
  let currentIndex = Math.floor((maxIndex + minIndex) / 2);

  if(minIndex > maxIndex) {
    return -1;
  }

  if(array[currentIndex] < number) {
    return binarySearchR(array, number, maxIndex, currentIndex + 1);
  } else if(array[currentIndex] > number) {
    return binarySearchR(array, number, currentIndex - 1, minIndex);
  } else {
    return currentIndex;
  }
}

console.log('Test for odd length array');
console.log(binarySearchR([1, 2, 3, 4, 5], 5));
console.log(binarySearchR([1, 2, 3, 4, 5], 1));
console.log(binarySearchR([1, 2, 3, 4, 5], 100));

console.log('Test for even length array');
console.log(binarySearchR([1, 2, 3, 4], 3) === 2);
console.log(binarySearchR([1, 2, 3, 4], 1) === 0);
console.log(binarySearchR([1, 2, 3, 4], 100) === -1);