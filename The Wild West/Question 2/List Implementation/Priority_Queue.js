//Queue: First In First Out (FIFO)
//Priority Queue Representation using an Array. 
//?In the priority queue data structure, elements with higher priorities are served before those of lower priorities
//?A lower number denotes higher priority

//!Performance Implications
//*Dequeueing (removing) an element from the queue requires shifting() the elements therefore removing the first element alone since the elements are sorted in order. O(1) time.
//*Enqueueing (adding) to the queue takes time since the entire array needs to be traversed in order to find the right place for the element which is determined by its priority. O(n) time.

//create a variable to store the new node created
//if there is no head in the list, the new variable becomes the new head & tail
//if there is a head in the list, then traverse the list and compare their priorities to that of the new variable
//insert the new node at the right position in the list
//return the list

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        this.next  = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;        
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let current = this.head;
            let previous = null;
            while(current && current.priority < newNode.priority) {
                previous = current;
                current = current.next;
            }
            if(!previous) {
                newNode.next = this.head;
                this.head = newNode;
            } else if(!current) {
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                previous.next = newNode;
                newNode.next = current;
            }
        }
        this.length ++;
    }
    dequeue() {
        if(!this.head) return undefined;
        let removed = this.head;
        this.head = this.head.next;
        this.length --;
        return removed;
    }
}

llpq = new PriorityQueue();

console.log("Order in which voters arrive at the polling station:");

llpq.enqueue("Margaret Wangui", 3);
llpq.enqueue("William Ruto", 2);
llpq.enqueue("Laban Njoroge", 1);
llpq.enqueue("Andrew Ohawa", 4);
llpq.enqueue("John Mwangi", 4);
llpq.enqueue("Pam Beasly", 2);

console.log("The voters are arranged in the queue according to their priority of voting.\n");
console.log("The priorities are given as follows:\nA)A voter is a disabled/elderly person - Priority 1\nB)A voter is a political figure - Priority 2\nC)A voter is a heavily pregnant lady - Priority 3\nD)A voter is a ordinary person - Priority 4\n");

console.log("The voters are arranged on the queue as follows and after voting they are removed from the queue\nHere is the current head and tail of the queue:")
console.log(llpq.head);
console.log(llpq.tail);

console.log("The voters leave in the following order until the queue is empty:")
console.log(llpq.dequeue());
console.log(llpq.dequeue());
console.log(llpq.dequeue());
console.log(llpq.dequeue());
console.log(llpq.dequeue());
console.log(llpq.dequeue());
