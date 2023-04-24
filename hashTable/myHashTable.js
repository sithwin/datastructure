class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } 
    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  } // O(1) if no collisions

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i=0; i<currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    } // 0(1) if no collisions

    return undefined
  }

}

const myHashTable = new MyHashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 10000);
console.log(myHashTable.get("grapes"));