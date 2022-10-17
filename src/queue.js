const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.massiv = [];
  }
  getUnderlyingList() {
    return this.massiv;
  }

  enqueue(value) {
    return this.massiv.push(value);
  }

  dequeue() {
    let element = this.massiv[0];
    this.massiv.shift();
    return element;
  }
}

module.exports = {
  Queue
};
