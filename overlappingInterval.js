//[[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]

let overlappingInterval = (arrayOfStamps) => {
  let min = arrayOfStamps[0][0];
  let max = arrayOfStamps[0][1];
  let intervals = [];
  for(let i = 1; i < arrayOfStamps.length; i++) {
    let minStamp = arrayOfStamps[i][0];
    let maxStamp = arrayOfStamps[i][1];
    if(minStamp >= min && minStamp <= max) {
      if(maxStamp > max) {
        max = maxStamp;
      }
    } else {
      intervals.push([min, max]);
      min = minStamp;
      max = maxStamp;
    }
  }
  intervals.push([min, max]);
  return intervals;
}

console.log(overlappingInterval([[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]));