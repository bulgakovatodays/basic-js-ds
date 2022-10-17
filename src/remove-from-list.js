const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(array, number) {
  while (arr.next !== null) {

    if (arr.value === num){
      arr = arr.next;
      return arr;
    }
  }
  /*
  console.log(array);
  let arr = array;
  
  if (array.value === number){
    arr = array.next;
    console.log(arr);
    
    return arr;
  }

  while(arr.next !== null){
    let prev = null;
    if (arr.value === number){
      arr = array.next;
      console.log(arr);
      return arr;
    }
  }
  */
  /*
  let current = array.next;


  let arr = array;
  let num = number;
  let temporal = array.value;
  let count = 0;
  

  while (arr.next !== null) {

    if (arr.value === num){
      arr = arr.next;
      return arr;
    }
    //console.log(arr.value);
    //console.log(arr.next);
    //console.log(arr);
    arr = arr.next;
  }

  return arr;
  /*
  for (let i = 0; i < array.length; i++){
    if (array[i] === number) {
      array.splice(i,1);
    }
  }
  return array;
  */
}

module.exports = {
  removeKFromList
};


/*
 it.optional('should return the list without values equal to k', () => {
    const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
    const expected = convertArrayToList([1, 2, 4, 5]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });

  it.optional('should return the list without values equal to k (with double k)', () => {
    const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
    const expected = convertArrayToList([1, 2, 4, 5]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });

  it.optional('should return the list without values equal to k (with k at the end)', () => {
    const initial = convertArrayToList([1, 2, 3]);
    const expected = convertArrayToList([1, 2]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });
*/