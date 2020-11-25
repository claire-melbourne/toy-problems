class HashTable {
  constructor(size = 29) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (var i = 0; i < Math.min(key.length, 100); i++) {
      total = (total * prime) + key.charCodeAt(i);
    }
    return total % this.keyMap.length;
  }

  _set(key, val) {
    //generate a hash
    var cubby = this._hash(key);
    //check value at hash location
    if (!this.keyMap[cubby]) {
      this.keyMap[cubby] = new Array();
    }
    let tuple = [key, val];
    this.keyMap[cubby].push(tuple);
  }

  _get(key) {
    var cubby = this._hash(key);
    if (this.keyMap[cubby]) {
      for (var i = 0 ; i < this.keyMap[cubby].length; i ++) {
        let tuple = this.keyMap[cubby][i];
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }
    return undefined;
  }

  _keys() {
    let keys = [];
    for (var i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (var j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  _values() {
    let values = [];
    for (var i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (var j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }

}

var hashTest = new HashTable();
hashTest._set("froggy", "green");
hashTest._set("turtle", "green");
hashTest._set("cow", "brown");
hashTest._get("cow");
console.log(hashTest._values());

// console.log(hashTest._hash('froggy'));
// console.log(hashTest._hash('doggy'));
// console.log(hashTest._hash('pollywog'));
// console.log(hashTest._hash('friend'));
// console.log(hashTest._hash('froggy'));