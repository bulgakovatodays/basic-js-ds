const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
 * 
*/
class BinarySearchTree {
  constructor() {
    this.array = null;
  }

  root() {
    if (this.array.lenght === '0') {
      return null;
    } else {
      return this.array[0];
    }
  
  }

  add(num) {
    this.array = addLeaf(this.array, num);

    function addLeaf(arr, num){
      if (arr === null){
        return new Node(num);
      } else {
        if (arr.data === num){
          return arr;
        } else {
          if (arr.data > num) {
            arr.right = addLeaf(arr.right, num);
          } else {
            arr.left = addLeaf(arr.left, num);
          }
        }
      }
      return arr;
    }
  }

  has(num) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  
    console.log(`We check: is 'tree' has ${num} - ${this.array.includes(num)}`);
    return this.array.includes(num);
  }

  find(num) {
    if (this.array.includes(num)) {
      return num;
    } else {return null};
    
  }

  remove(num) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
   let a = this.array.indexOf(num);
   return this.array.splice(a, 1);
   
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    if (this.array.lenght > 0) {
      let min = this.array[0];
      this.array.forEach(elem => {
        if (min > elem){
          min = elem;
        }
      });
      return min;
    } else { 
      return null;
    }
    
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    if (this.array.lenght > 0) {
      let max = this.array[0];
      this.array.forEach(elem => {
        if (max < elem){
          max = elem;
        }
      });
      return max;
    }  else { 
      return null;
    }
    
}}

module.exports = {
  BinarySearchTree
};