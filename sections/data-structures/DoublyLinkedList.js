class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
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
    if (!this.length) return null;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = poppedNode.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    poppedNode.prev = null;
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.length) return null;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
    }
    shiftedNode.next = null;
    this.length--;
    return shiftedNode;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    } else {
      let currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
      return currentNode;
    }
  }
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.lentgh) return false;
    else if (index === 0) return !!this.unshift(value);
    else if (index === this.length) return !!this.push(value);

    const currentNodeAtIndex = this.get(index);
    const prevNode = currentNodeAtIndex.prev;
    const newNode = new Node(value);

    newNode.next = currentNodeAtIndex;
    currentNodeAtIndex.prev = newNode;

    prevNode.next = newNode;
    newNode.prev = prevNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return !!this.shift();
    else if (index === length - 1) return !!this.pop();

    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}