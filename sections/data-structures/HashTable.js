class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
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
  keys() {
    const keysArr = [];
    for (let group of this.keyMap) {
      if (group) {
        for (let [key,] of group) {
          if (!keysArr.includes(key)) keysArr.push(key);
        }
      }
    }
    console.log(keysArr);
    return keysArr;
  }
  values() {
    const valuesArr = [];
    for (let group of this.keyMap) {
      if (group) {
        for (let [, value] of group) {
          if (!valuesArr.includes(value)) valuesArr.push(value);
        }
      }
    }
    console.log(valuesArr);
    return valuesArr;
  }
}
