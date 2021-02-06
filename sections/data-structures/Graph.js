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
}