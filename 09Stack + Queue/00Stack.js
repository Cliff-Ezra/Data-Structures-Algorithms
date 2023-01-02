//A stack is an ADT that abides by LIFO (Last In First Out) structure

//What it contains:
//Nodes -> Stores a piece of data - val
//Reference to next node - next
//The methods are similar to shift & unshift used in LL
//For the methods -> we will be adding and removing from the beginning of the list. This is because when we do these operations on the beginning it is faster O(n) in singly linked list. 
//If we were using a doubly linked list the time will be constant even at the end of the list.

//!Push (Add a value to the top of the stack)
//Define a function that accepts a value
//Create a new node with that value
//If there are no nodes in the stack, set the first & last property to be the newly created node
//If there is at least one node, create a variable that stores the current first property on the stack
//Reset the first property to be the newly created node
//Set the next property on the node to be the previously created variable
//Increment the size of the stack by 1

//!Pop (Remove a value from the top of the stack)
//If there are no nodes in the stack return null
//Otherwise, create a temporary variable to store the first property on the stack
//If there is only 1 node, set the first & last property to be null
//If there is more than one node, set the first property to be the next property on the current first
//Decrement the size by 1
//Return the value of the node removed

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;  
        }
        return ++this.size
    }
    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp.value
    }
}

let stack = new Stack()

