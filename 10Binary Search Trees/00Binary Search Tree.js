//A Binary Search Tree is a type of Binary Tree that contains 2 children at most & the node to the left of the parent contains is always less than the paretnt and the node to the right of the parent is always greater than the parent node

//What it contains:
//Nodes -> Stores a piece of data - val
//Reference to children - left & right

//!Inserting a node (It can be done iteratively or recursively):
//Create a new node
//Starting at the root:
    //Check if there is a root, if not - the root now becomes that new node
    //If the new Node value is equal to a value that is already in the tree; return undefined
    //If there is a root, check if the value of the new node is greater than or less than the value of the root
    //If it is greater:
        //Check to see if there is a node to the right
            //If there is, move to that node and repeat these steps
            //If there is not, add that node as the right property
    //If it is less:
        //Check to see if there is a node to the left
            //If there is, move to that node and repeat these steps
            //If there is not, add that node as the left property
//Return the tree

//!Finding a node
//Starting at the root:
    //Check if there is a root, if not; we're done searching
    //Create a pointer variable that starts from the root
    //Create a variable for found 
    //If there is a root, check if the value of the new node is the value we are looking for; If we found it we're done
    //If not, check to see if the value is greater than or less than the value of the root
    //If it is greater:
        //Check to see if there is a node to the right:
            //If there is, move to that node and repeat these steps
            //If there is not, we're done searching
    //If it is less:
        //Check to see if there is a node to the left:
            //If there is, move to that node and repeat these steps
            //If there is not, we're done searching

//!Contains (This is a true or false version of Find)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value)  {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(value) {
        if(!this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value) {
        if(!this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();

//          10
//   5             13
// 2   7        11    16 

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)


// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree .root.left = new Node(7);
// tree.root.left.right = new Node(9)
