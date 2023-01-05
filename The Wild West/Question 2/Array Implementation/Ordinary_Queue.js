//Queue: First In First Out (FIFO)
//Ordinary Queue Representation using an Array
//?This method involves using push() to enqueue and shift() to dequeue as methods of the Array 

//!Performance Implications
//*Dequeueing (removing) an element from the beginning of the array causes all the other items in the queue to be reindexed. O(n) time
//*Enqueueing (adding) to the end of the queue however does not involve re-indexing of any kind it just involves indexing of the newly added element. O(1) time.

class Node {
    constructor(val) {
        this.val = val;
    }
}

class Queue {
    constructor() {
        this.values = [];
    }
    enqueue(val) {
        let newNode = new Node(val);
        this.values.push(newNode);
        return "Added voter";
    }
    dequeue() {
        if(this.values.length === 0) return "Underflow"
        let removedElement = this.values.shift();
        return removedElement
    }
}

let qu = new Queue();

console.log("\nOrder in which voters arrive at the polling station:");
qu.enqueue("FIRST: Bobby");
console.log(qu);
qu.enqueue("SECOND: Tony");
console.log(qu);
qu.enqueue("THIRD: Annie");
console.log(qu);

// console.log("\nThe queue contains the following voters waiting: " + qu.values + "\n");

console.log("After voting the voters leave the line in the following order:");
console.log(qu);
qu.dequeue()
console.log(qu)
qu.dequeue();
console.log(qu)
qu.dequeue();
console.log(qu)

