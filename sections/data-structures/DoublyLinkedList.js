class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldTail = this.tail;
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return null;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = poppedNode.prev;
      newTail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedLists();