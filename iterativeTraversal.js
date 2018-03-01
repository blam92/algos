let iterativeTraversal = (bst) => {
  let results = [];

  let recurseBST = (bst) => {
    if(bst.left) {
      recurseBST(bst.left);
    }
    results.push(bst.value);
    if(bst.right) {
      recurseBST(bst.right);
    }
  }
  recurseBST(bst);
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

console.log(iterativeTraversal(bst1));