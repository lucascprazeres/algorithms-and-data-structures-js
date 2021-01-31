class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    const oldTail = this.tail;
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldTail.value;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead.value;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let jumps=0; jumps < index; jumps++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      targetNode.value = value;
      return true;
    }
    return false;
  }
}