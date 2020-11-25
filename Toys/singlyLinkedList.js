class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let currentNode = this.head;
      let prevNode = currentNode;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = null;
      this.tail = prevNode;
      this.length -= 1;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let shiftedNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = this.head;
    }
    this.length -= 1;
    return shiftedNode;
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
   this.length += 1;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let node = this.head;
    for (var i = 0; i < index; i++) {
      node = node.next
    }
    return node;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.value = val;
    return true;
  }

  insert(index, val) {
    //create new node with value
    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val)
    } else {
      let prevNode = this.get(index - 1);
      if (!prevNode) {
        return false;
      }
      let newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length += 1;
    }
    return true;
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index >= this.length || index < 0) {
      return undefined;
    }
    let prevNode = this.get(index);
    //set currentNode to prevNode.next
    let nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.length -= 1;
    return nodeToRemove;
  }

  reverse() {
    if (this.length > 1) {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null;
      let next;
      for (var i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
    return this;
  }
}

var listTest = new SinglyLinkedList();
listTest.push(5);
listTest.push(6);
listTest.push(7);
listTest.unshift(4);
// listTest.get(2);
// listTest.set(3, 'cow');
// listTest.insert(4, 'horse')
// listTest.insert(0, 'pig');
// listTest.insert(2, 'sheep');
// listTest.remove(0);
// listTest.remove(5);
// listTest.remove(9);
// listTest.remove(3);
listTest.reverse();