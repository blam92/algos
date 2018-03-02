//need to use traversal in order to take care of some edge cases.

let isBST = (bst) => {
  if(bst.left === null && bst.right === null) {
    return true;
  }
  if(bst.value > bst.left.value && bst.value < bst.right.value) {
    let leftSide = isBST(bst.left);
    let rightSide = isBST(bst.right);

    return leftSide && rightSide;
  }

  return false;
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
console.log(isBST(bst1));