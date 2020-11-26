class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.frequency = 1;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    let branch = this.root
    while (branch) {
      if (value === branch.value) {
        branch.frequency += 1;
        return this;
      } else if (value < branch.value) {
        if (!branch.left) {
          branch.left = new Node(value);
          return this;
        }
        branch = branch.left;
      }
      else if (value > branch.value) {
        if (!branch.right) {
          branch.right = new Node(value);
          return this;
        }
        branch = branch.right
      }
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    const recurse = (branch) => {
      if (branch.value === value) {
        return branch;
      }
      if (value < branch.value) {
        return recurse(branch.left);
      }
      if (value > branch.value) {
        return recurse(branch.right)
      }
  }
    return recurse(this.root);
  }

  inOrderDFS() {
    let flattenedTree = [];
    const recurse = (branch) => {
      if (branch.left) {
        recurse(branch.left);
      }
      flattenedTree.push(branch.value);
      if (branch.right) {
        recurse(branch.right);
      }
    }
    recurse(this.root);
    return flattenedTree;
  }
}

let tree = new BST();
tree.insert(5)
tree.insert(4)
tree.insert(19)
tree.insert(3)
tree.insert(16)
tree.insert(7)
// tree.find(16);
// console.log(tree.find(4));
// console.log(tree)
console.log(tree.inOrderDFS());


class Tree {
  constructor(val) {
    this.value = val;
    this.children = [];
  }
  addChild(val) {
    this.children.push(new Tree(val));
    return this;
  }
  BFS() {
    let flattenedTree = [];
    let queue = [];
    //add root to queue
    queue.push(this);
    while (queue.length > 0) {
      let dqed = queue.shift();
      flattenedTree.push(dqed.value);
      for (var i = 0; i < dqed.children.length; i++) {
        queue.push(dqed.children[i]);
      }
    }
    return flattenedTree;
  }
  preDFS() {
    let flattenedTree = [];
    flattenedTree.push(this.value);
    for (var i = 0; i < this.children.length; i++) {
      flattenedTree = flattenedTree.concat(this.children[i].preDFS())
    }
    return flattenedTree;
  }
  postDFS() {
    let flattenedTree = [];
    const recurse = (branch) => {
      for (var i = 0; i < branch.children.length; i++) {
        recurse(branch.children[i]);
      }
      flattenedTree.push(branch.value);
    }
    recurse(this);
    return flattenedTree;
  }
}

// let tree = new Tree('cat');
// tree.addChild('dog');
// tree.addChild('bear');
// tree.children[0].addChild('crow');
// tree.children[1].addChild('beetle');
// tree.children[1].addChild('cricket');
// tree.children[0].children[0].addChild('fox');
// tree.children[0].children[0].addChild('wolf');
// tree.children[1].children[0].addChild('grasshopper');
// tree.children[1].children[0].addChild('worm');
// tree.children[1].children[1].addChild('cockroach');
// console.log(tree.postDFS());