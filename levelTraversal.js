class Queue {
  constructor() {
    this.store = {};
    this.next = 0;
    this.first = 0;
  }

  enqueue(value) {
    this.store[this.next] = value;
    this.next++;
  }

  dequeue() {
    let result = this.store[this.first];
    delete this.store[this.first];
    this.first++;
    return result;
  }

  length() {
    return this.next - this.first;
  }
}

transferToOtherQueue = (q1, q2) => {
  while(q1.length() > 0) {
    q2.enqueue(q1.dequeue());
  }
}

let levelTraversal = (bst) => {
  let results = [];
  let levels = [];
  let currentQueue = new Queue();
  let childrenQueue = new Queue();
  currentQueue.enqueue(bst);
  while(currentQueue.length() > 0 || childrenQueue.length() > 0) {
    let nodeToAdd = currentQueue.dequeue()
    if(nodeToAdd.left) {
      childrenQueue.enqueue(nodeToAdd.left);
    } 

    if(nodeToAdd.right) {
      childrenQueue.enqueue(nodeToAdd.right);
    }
    
    levels.push(nodeToAdd);

    if(currentQueue.length() === 0) {
      transferToOtherQueue(childrenQueue, currentQueue);
      results.push(levels);
      levels = [];
    }
  }
  return results;
}

let bst1 = {
  value: 100,
  left: {
    value: 50,
    left: {
      value: 25,
      left: null,
      right: null
    },
    right: {
      value: 75,
      left: null,
      right: null
    }
  },
  right: {
    value: 200,
    left: {
      value: 125,
      left: null,
      right: null
    },
    right: {
      value: 300,
      left: null,
      right: null
    }
  }
}

console.log(levelTraversal(bst1));


