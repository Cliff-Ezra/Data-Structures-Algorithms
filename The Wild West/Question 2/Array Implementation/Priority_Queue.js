//Queue: First In First Out (FIFO)
//Priority Queue Representation using an Array. 
//?In the priority queue data structure, elements with higher priorities are served before those of lower priorities
//?A lower number denotes higher priority

//!Performance Implications
//*Dequeueing (removing) an element from the queue requires shifting() the elements therefore removing the first element alone since the elements are sorted in order. O(1) time.
//*Enqueueing (adding) to the queue takes time since the entire array needs to be traversed in order to find the right place for the element which is determined by its priority. O(1) time.

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        let contain = false;
        
        for(let i = 0; i < this.values.length; i++) {
            if(this.values[i].priority > newNode.priority) {
                this.values.splice(i,0,newNode);
                contain = true;
                break;   
            }
            // this.length ++;
        }
        if(!contain) {
            this.values.push(newNode);
        }
    }
    dequeue() {
        if(this.values.length === 0) return undefined;
        return this.values.shift();
    }
}

let pq = new PriorityQueue();

console.log("Order in which voters arrive at the polling station:");

pq.enqueue("Margaret Wangui", 3);
pq.enqueue("William Ruto", 2);
pq.enqueue("Laban Njoroge", 1);
pq.enqueue("Andrew Ohawa", 4);
pq.enqueue("John Mwangi", 4);
pq.enqueue("Pam Beasly", 2);

console.log("The voters are arranged in the queue according to their priority of voting.\n");
console.log("The priorities are given as follows:\nA)A voter is a disabled/elderly person - Priority 1\nB)A voter is a political figure - Priority 2\nC)A voter is a heavily pregnant lady - Priority 3\nD)A voter is a ordinary person - Priority 4\n");

console.log("The voters are arranged on the queue as follows and after voting they are removed from the queue")
console.log(pq);

console.log("The voters leave in the following order until the queue is empty:")
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
