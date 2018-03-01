let identicalBST = (bst1, bst2) => {
  let firstBSTArray = bstNodeArray(bst1);
  let secondBSTArray = bstNodeArray(bst2);
  if(firstBSTArray.length !== secondBSTArray.length) {
    return false;
  }

  for(let i = 0; i < firstBSTArray.length; i++) {
    if(firstBSTArray[i].value !== secondBSTArray[i].value) {
      return false;
    }
  }
  return true;
}

let bstNodeArray = (bst) => {
  let comparisonBST = [bst, bst.left, bst.right];
  for(let i = 1; i < comparisonBST.length; i++) {
    let leftChild = comparisonBST[i].left;
    let rightChild = comparisonBST[i].right;
    if(leftChild) {
      comparisonBST.push(leftChild);
    }
    if(rightChild) {
      comparisonBST.push(rightChild);
    }
  }
  return comparisonBST;
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
    right: null
  },
  right: {
    value: 200,
    left: {
      value: 125,
      left: null,
      right: null
    },
    right: {
      value: 350,
      left: null,
      right: null
    }
  }
}

let bst2 = {
  value: 100,
  left: {
    value: 50,
    left: {
      value: 25,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 200,
    left: {
      value: 125,
      left: null,
      right: null
    },
    right: {
      value: 350,
      left: null,
      right: null
    }
  }
}

console.log(identicalBST(bst1, bst2));

let identicalBSTDepthFirst = (bst1, bst2) => {
  if(!bst1 && !bst2) {
    return true;
  }

  if(bst1 && bst2) {
    return (bst1.value === bst2.value && identicalBSTDepthFirst(bst1.left, bst2.left)
    && identicalBSTDepthFirst(bst1.right, bst2.right));
  }

  return false;
}