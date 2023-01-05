//Queue: First In First Out (FIFO)
//Ordinary Queue Representation using an Array
//?This method involves using push() to enqueue and shift() to dequeue as methods of the Array 

//!Performance Implications
//*Dequeueing (removing) an element from the beginning of the array causes all the other items in the queue to be reindexed. O(n) time
//*Enqueueing (adding) to the end of the queue however does not involve re-indexing of any kind it just involves indexing of the newly added element. O(1) time.

let queue = [];

// Add elements to the queue
console.log("\nOrder in which voters arrive at the polling station:");
queue.push("FIRST");
console.log(queue);
queue.push("SECOND");
console.log(queue);
queue.push("THIRD");
console.log(queue);

console.log("\nThe queue contains the following voters waiting: " + queue + "\n");

// Remove elements from the queue
console.log("After voting the voters leave the line in the following order:");
console.log(queue);
queue.shift();
console.log(queue)
queue.shift();
console.log(queue)
queue.shift();
console.log(queue)
