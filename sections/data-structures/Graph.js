class Graph {
  constructor() {
    this.adjacentList = {};
  }
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    const vtx1 = this.adjacentList[vertex1];
    const vtx2 = this.adjacentList[vertex2];
    if (!vtx1.includes(vertex2)) vtx1.push(vertex2);
    if (!vtx2.includes(vertex1)) vtx2.push(vertex1);
  }
  removeVertex(removedVertex) {
    while (this.adjacentList[removedVertex].length) {
      const adjacentVertex = this.adjacentList[removedVertex].pop();
      this.removeEdge(adjacentVertex, removedVertex);
    }
    delete this.adjacentList[removedVertex];
  }
  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(
      vt => vt !== vertex2,
    );
    this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(
      vt => vt !== vertex1,
    );
  }
  depthFirstTraversalRecursive(startVertex) {
    const result = [];
    const visited = {};

    const visit = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      this.adjacentList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return visit(neighbor);
      });
    }
    visit(startVertex);

    return result;
  }
  depthFirstTraversalIterative(start) {
    const willVisit = [start];
    const result = [];
    const visited = {};
    let currentVisit;

    visited[start] = true;
    while (willVisit.length) {
      currentVisit = willVisit.pop();
      result.push(currentVisit);
      this.adjacentList[currentVisit].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          willVisit.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.depthFirstTraversalIterative('A'));