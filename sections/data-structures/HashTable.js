class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    console.log(this.keyMap)
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let [currentKey, currentVal] of this.keyMap[index]) {
        if (currentKey === key) return currentVal;
      }
    }
    return undefined;
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}