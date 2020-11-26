class MaxHeap {
  constructor() {
    this.values = [];
  }
  bubbleUp(childIndex) {
    let child = this.values[childIndex];
    let parentInd = Math.floor((childIndex - 1)/2);
    while (child > this.values[parentInd]) {
      this.values[childIndex] = this.values[parentInd];
      this.values[parentInd] = child;
      childIndex = parentInd;
      parentInd = Math.floor((childIndex - 1)/2);
      child = this.values[childIndex]
    }
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
    return this.values;
  }

  bubbleDown() {
    let parentIdx = 0;
    let idx1 = 1;
    let idx2 = 2;
    while(this.values[parentIdx] < this.values[idx1] || this.values[parentIdx] < this.values[idx2]) {
      let childIdx;
      if (this.values[idx2] < this.values[idx1]) {
        childIdx = idx1;
      } else if (this.values[idx1] < this.values[idx2]) {
        childIdx = idx2;
      }
      let parent = this.values[parentIdx]
      this.values[parentIdx] = this.values[childIdx];
      this.values[childIdx] = parent;
      parentIdx = childIdx;
      idx1 = 2 * parentIdx + 1;
      idx2 = 2 * parentIdx + 2;
    }
  }
  extractMax() {
    let max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.bubbleDown();
    return max;
  }
}

let heap = new MaxHeap();
console.log(heap.insert(30));
console.log(heap.insert(20));
console.log(heap.insert(89));
console.log(heap.insert(25));
console.log(heap.insert(18));
console.log(heap.insert(21));
console.log(heap.insert(70));
console.log(heap.insert(34));
console.log(heap.extractMax());
