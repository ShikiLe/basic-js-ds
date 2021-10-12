const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
module.exports = class Queue {
  constructor() {
    this.queue = [];
  }
  getUnderlyingList() {
    let list;
    let node;
    let lastNode;

    for (let i = 0; i < this.queue.length; i++) {
        node = new ListNode(this.queue[i]);
        if (i == 0) {
            lastNode = node;
            list = node;
            continue;
        }
    lastNode.next = node;
    lastNode = node;
    }
   return list;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
};
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//   }
// }
