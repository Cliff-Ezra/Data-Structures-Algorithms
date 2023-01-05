//Queue: First In First Out (FIFO)
//Ordinary Queue Representation using a Singly Linked List
//?This method involves implementing a singly linked list class called queue and adding methods to it to enqueue and dequeue

//!Performance Implications
//*Dequeueing (removing) an element from the beginning of the queue does not involve re-indexing of the elements in the array. O(1) time
//*Enqueueing (adding) to the end of the queue however involves re-indexing of the elements in the array. O(n) time.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    enqueue(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    dequeue() {
        if(!this.head) return undefined;
        let removedVal = this.head;
        this.head = removedVal. next;
        this.length --;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return removedVal;
    }
}

let q = new Queue()

//Adding elements to the queue
q.enqueue("FIRST: Jim");
q.enqueue("SECOND: Michael");
q.enqueue("THIRD: Bobby");

console.log(`\nThe queue contains the voters waiting in line.\nThe first voter to arrive is: ${q.head.val}.\nThe last voter to arrive is: ${q.tail.val}.\n\n`);

// console.log(q.head.val)

//Removing elements from the queue
console.log("After voting the voters leave the line in the following order:");
console.log(q.dequeue().val);
console.log(q.dequeue().val);
console.log(q.dequeue().val);
