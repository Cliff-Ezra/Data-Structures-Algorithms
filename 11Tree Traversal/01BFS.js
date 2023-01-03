//In Bredth-first Search we want to visit every node on the same level (each sibling node) before we look at a child

//!BFS Traversal:
//Create a queue(this can be an array) and a variable to store the values of nodes visited
//Place the root node in the queue
//Loop as long as there is anything in the queue
    //Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    //If there is a left property on the node dequeued - add it to the queue
    //If there is a right property on the node dequeued - add it to the queue
//Return the variable that stores the values

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
}

tree = new Tree();

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

tree.bfs();


//          10
//   6             15
// 3   8              20 

//queue    :[]
//visited  :[10,6,15,3,8,20] 