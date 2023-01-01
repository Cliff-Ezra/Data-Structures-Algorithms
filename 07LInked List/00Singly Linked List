//A singly linked list is a collection of nodes that are connected unidirectionally

//What it contains:
//Nodes -> Stores a piece of data - val
//Reference to next node - next

//!Push (Adding a new node to the end of the linked list):
//The function should accept a value
//Create a new node using the value passed to the function
//If there is no head property, set the head & the tail to be the newly created node
//Otherwise, set the next property on the tail to be the new node and set the tail to property on the list to be the newly created node
//Increment the length by one
//Return the linked list

//!Pop (Removing a node from the end of the linked list):
//Define a pop function that does not accept any value 
//If there are no nodes in the list, return undefined
//Else, loop through the list until you reach the tail
//Set the property of the 2nd to last node to be null
//Set the tail to be the 2nd to last node
//Decrement the length of the list by 1
//Return the value of the node removed

//!Shifting (Removing a node from the head of the linked list)
//If there are no nodes, return undefined
//Store the current head property in a variable
//Set the head property to be the current head's next property
//Decrement the length by 1
//Return the value of the node removed

//!Unshifting (Adding a new node to the beginning of the linked list)
//Define a function that accepts a value
//Create a new node using the value passed to the function
//If there is no head property on the list, set the head and tail to be the newly created one
//Otherwise, set the newly created node's next property to be the current head property in the list
//Set the head property on the list to be the newly created node
//Increment the length of the lst by 1
//Return the linked list

//!Get (Retrieving a node by its position in the link list)
//Define a function that should accept an index
//If the index is less than 0 or greater than or equal to the length of the list, return null
//Loop through the list until you reach the index and return the node at the specific index

//!Set (Changing the value of a node based on its position in the linked list)
//Define a function that accepts an index and a value
//Use your get function to find the specific node
//If the node is not found, return false
//If the node is found, set the value of that node to be the value passed to the function & return true

//!Insert (Adding a node to the linked list at a specific position)
//Define a function that accepts an index and a value
//If the index is less than zero or greater than the length, return false
//If the index is the same as the length, push a new node to the end of the list (push method)
//If the index is 0, unshift a new node to the start of the list (unshift method)
//Create a new node
//Otherwise, using the get method, access the node at the index - 1 (this gives the index of the prev node)
//Set the next  property on that node to be the new node 
//Set the next property on the new node to be the previous next
//Increment the length
//Return true

//!Remove (Removing a node from the linked list at the specified position)
//Define a function that accepts an index
//If the index is less than 0 or greater than or equal to the length, return undefined
//If the index is the same as the length - 1, pop
//If the index is 0, shift
//Otherwise, using the get method, access the node at the index -1
//Set the next property on that node to be the next of the next node
//Decrement the length
//Return the value of the removed node

//!Reverse (Reversing a linked list in place)
//Swap the head and the tail
//Create a variable called next
//Create a variable called prev
//Create a variable called node and initialize it to the head property
//Loop through the list
//Set next to be the next property on whatever node is
//Set the next property on the node to be whatever prev is
//Set prev to be the value of the node variable
//Set the node variable to be the value of the next variable
//Once you have finished looping, return the list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }  else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newFirst = new Node(val);
        if(!this.head) {
            this.head = newFirst;
            this.tail = this.head;
        } else {
            newFirst.next = this.head;
            this.head = newFirst;
            }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current
    }
    set(index, val) {
        let foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index ,val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) {
            this.push(val);  
            return true;
        } 
        if(index === 0) return !!this.unshift(val);
         
        let newNode = new Node(val);
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let prevNode = this.get(index -1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null

        for(let i = 0; i < this.length; i ++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}  

let list = new SinglyLinkedList()
list.push("Hello") 
list.push("Goodbye")
list.push("!")
list.push("<3")
list.push(":)")

// list.push(100)
// list.push(201)
// list.push(250)
// list.push(350)
// list.push(999)

