//In DFS we traverse downwards until we hit the end of the tree at some point then the next step will be dependent on the order we do things
//In PreOrder, we’re going to visit the node first, then we traverse the entire left side; then we traverse the entire right side and this is true for every node.

//!DFS - PreOrder (This can be done iteratively or recursively) [recursively]
//Create a variable to store the values of nodes visited
//Store the root of the BST in a variable called current
//Write a helper function which accepts a node
    //If the node has a left property, call the helper function with the left property on the node
    //Push the value of the node to the variable that stores the values
    //If the node has a right property, call the helper function with the right property on the node
//Invoke the helper function with the current variable
//Return the array of values

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
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
    bfs() {
        let data = [];
        let queue = [];
        let node = this.root;
        
        queue.push(node);
        
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data
    }
    preOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

tree = new Tree();

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

tree.preOrder();


//          10
//   6             15
// 3   8              20 

//BFS
//queue    :[]
//visited  :[10,6,15,3,8,20] 

//DFS PreOrder
//visited  :[10,6,3,8,15,20]