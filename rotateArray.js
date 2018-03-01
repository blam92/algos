
// [1, 10 , 20, 0, 59, 86, 32, 11, 9, 40] -2
// [20, 0, 59, 86, 32, 11, 9, 40, 1, 10]

// [1, 10 , 20, 0, 59, 86, 32, 11, 9, 40] 2
// [9, 40, 1, 10 , 20, 0, 59, 86, 32, 11]

let rotateArray = (array, shift) => {
  let newArray = [];
  if(shift >= 0) {
    for(let i = array.length - shift; i <= array.length - 1 ; i++) {
      newArray.push(array[i]);
    }
    for(let i = 0; i < array.length - shift; i++) {
      newArray.push(array[i]);
    }
  } else {
    let positiveShift = shift * -1;
    for(let i = positiveShift; i < array.length; i++) {
      newArray.push(array[i]);
    }
    for(let i = 0; i < positiveShift; i++) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(rotateArray([1, 10 , 20, 0, 59, 86, 32, 11, 9, 40], -1));