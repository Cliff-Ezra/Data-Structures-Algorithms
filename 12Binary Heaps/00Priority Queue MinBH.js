//Priority Queue is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
//In this priority Queue: 1 is a high priority, 2 is medium and 3 is low priority

//!Priority Queue: (Implemented using a min binary heap)
//Write a Min Binary Heap - lower numbers means higher priority
//Each node has a val and a priority. Use the priority to build the heap
//Enqueue method accepts a value and a priority, makes a new node, and puts it in the right spot based off of its priority
//Dequeue method removes root element, returns it, and rearranges heap using priority

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        // this.insertTime = Date.now()
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode)
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();    
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("Common Cold", 5)
ER.enqueue("Gunshot Wound", 1)
ER.enqueue("High Fever", 4)
ER.enqueue("Broken Arm", 2)
ER.enqueue("Glass in Foot", 3)
