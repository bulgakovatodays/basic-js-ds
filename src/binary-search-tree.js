const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {}

  root() {
    if (this.lenght === '0') {
      return 'null';
    } else {
      return this;
    }
  }

  add(num) {
    console.log(`We add ${num}`);
    return this.push(num);
  }

  has(num) {
    console.log(`We check: is 'tree' has ${num} - ${this.includes(num)}`);
    return this.includes(num);
  }

  find(num) {
    if (this.includes(num)) {
      return num;
    } else {return 'null'};
  }

  remove(num) {
   let a = this.indexOf(num);
   return this.splice(a, 1);
  }

  min() {
    let min;
    if (this.lenght > 0) {
      min = this[0];
      for (let i = 0; i < this.lenght; i++) {
        if (min > this[i]){
          min = this[i];
        }
      }
    } else { min = 'null'};
  return min;
}

  max() {
    let max;
    if (this.lenght > 0) {
      max = this[0];
      for (let i = 0; i < this.lenght; i++) {
        if (max < this[i]){
          max = this[i];
        }
      }
    } else { max = 'null'};
  return max;
  }
}

module.exports = {
  BinarySearchTree
};