class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while(true) {
      if (value === currentNode.value) return undefined;

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  find(value) {
    let currentNode = this.root;
    while(currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      else return currentNode;
    }
    return false;
  }
  breadthFirstSearch() {
    const queue = [];
    const visited = []; 
    queue.push(this.root);
    while(queue.length) {
      let node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    } 
    return visited;
  }
  depthFirstSearchPreOrder() {
    const visited = [];
    const traverseStartingFrom = (node) => {
      visited.push(node.value);
      if (node.left) traverseStartingFrom(node.left);
      if (node.right) traverseStartingFrom(node.right);
    }
    traverseStartingFrom(this.root);
    return visited;
  }
  depthFirstSearchPostOrder() {
    const visited = [];
    const traverseStartingFrom = (node) => {
      if (node.left) traverseStartingFrom(node.left);
      if (node.right) traverseStartingFrom(node.right);
      visited.push(node.value);
    }
    traverseStartingFrom(this.root);
    return visited;
  }
  depthFirstSearchInOrder() {
    const visited = [];
    const traverseStartingFrom = (node) => {
      if (node.left) traverseStartingFrom(node.left);
      visited.push(node.value);
      if (node.right) traverseStartingFrom(node.right);
    }
    traverseStartingFrom(this.root);
    return visited;
  }
}
