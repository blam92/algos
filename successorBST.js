let successorBST = (bst, target, successor = null) => {
  if(bst === null) {
    return null;
  }
  if(bst.value < target) {
    return successorBST(bst.right, target, successor);
  } else if(bst.value > target) {
    return successorBST(bst.left, target, bst);
  } else {
    //it is the target;
    if(bst.right === null) {
      return successor;
    } else {
      return bst.left;
    }
  }
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
      value: 350,
      left: null,
      right: null
    }
  }
}

console.log(successorBST(bst1, 105));