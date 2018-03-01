[-4, 2, -5, 3, 6]
let getValidWindow = (array, w) => {
  if(w > array.length) {
    return array.length;
  } else {
    return w;
  }
}

let maxSlidingWindow = (array, w) => {
  let maxes = [];

  let slowPointer = 0;
  let fastPointer = getValidWindow(array, w) - 1;
  while(fastPointer <= array.length - 1) {
    let max = null;
    for(let i = slowPointer; i <= fastPointer; i++) {
      if(max === null || array[i] > max) {
        max = array[i];
      }
    }
    maxes.push(max);
    slowPointer++;
    fastPointer++;
  }
  return maxes;
}

console.log(maxSlidingWindow([-4, 2, -5, 3, 6], 3));

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length -1);
  }

  bubbleUp(index) {
    let parentIndex = this.getParentIndex(index);
    if(this.values[parentIndex] < this.values[index]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      this.bubbleUp(parentIndex);
    }
  }

  remove() {

  }

  peekRoot() {
    return this.values[0];
  }

  getParentIndex(childIndex) {
    if(childIndex % 2 === 0) {
      return (-2 + childIndex) / 2;
    } else {
      return (-1 + childIndex) / 2;
    }
  }

  getChildrenIndex(parentIndex) {
    let firstChild = (parentIndex * 2) + 1;
    let secondChild = (parentIndex * 2) + 2;
    // if(!this.values[firstChild]) {
    //   firstChild = -1;
    // }
    // if(!this.values[secondChild]) {
    //   secondChild = -1;
    // }

    return [firstChild, secondChild];
  }
}

let heap = new BinaryHeap();

heap.values = [60, 30, 35, 15, 20];

heap.insert(90);
console.log(heap.values);