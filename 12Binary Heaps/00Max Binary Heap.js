//Max Binary Heap, parent nodes are always larger than child nodes

//!Insert (For heap insert a node is added to the end of the heap from left to right and then it is bubbled up):
//Push the value into the values property on the heap
//Bubble the value up to its correct spot
    //Create a variable called index which is the length of the values property -1
    //Create a variable called parentIndex which is the floor of (index-1)/2
    //Keep looping as long as the values element at the values element at the parentIndex is less than the values element at teh child index
        //Swap the value of the values element at the parentIndex with the value of the element property at the child index
        //Set the index to be the paretnIndex, and start over

//!Remove (This extracts the maximum element, replaces it with the last element in the heap and restores the heap properties)
//Swap the first value in the values property with the last one
//Pop from teh values property, so you can return the value at the end
//Have the new root "sink down" to the correct spot
    //Your parent index starts at 0(the root)
    //Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    //Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    //If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
    //The child index you swapped to now becomes the noew parent index
    //Keep looping and swapping until neither child is larger than the element
    //Return the old root


    class MaxBinaryHeap {
        constructor() {
            this.values = []
        }
        insert(element) {
            this.values.push(element)
            this.bubbleUp();
        }
        bubbleUp() {
            let idx = this.values.length - 1;
            const element = this.values[idx];
            while(idx > 0) {
                let parentIdx = Math.floor((idx - 1)/2);
                let parent = this.values[parentIdx];
                if(element <= parent) break;
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
            }
        }
        extractMax() {
            let max = this.values[0];
            let end = this.values.pop();
            if(this.values.length > 0) {
                this.values[0] = end;
                this.sinkDown();    
            }
            return max;
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
                    if(leftChild > element) {
                        swap = leftChildIdx;
                    }
                }
                if(rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx]
                    if(
                        (swap === null && rightChild > element) || 
                        (swap !== null && rightChild > leftChild)
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
    
    let heap = new MaxBinaryHeap();
    heap.insert(41)
    heap.insert(39)
    heap.insert(33)
    heap.insert(18)
    heap.insert(27)
    heap.insert(12)
    heap.insert(55)
               
    //          41
    //     39             33
    // 18    27       12      55* 
    
    // [41,39,33,18,27,12,55]
    //  0   1  2  3  4  5  6
    
    //After inserting 55
    // [55,39,41,18,27,12,33]
    
    //RemoveMax 
    // [55,39,41,18,27,12,33]
    //  0   1  2  3  4  5  6
    //after removing first element
    // [33,39,41,18,27,12]
    //  0   1  2  3  4  5 