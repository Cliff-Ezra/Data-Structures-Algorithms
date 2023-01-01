//! Refactored Solution 1 (Old Swap) (Optimized with noSwap)
function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]) { 
            //SWAP
            let temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
            noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log('ONE PASS COMPLETE');
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);


//! Refactored Solution 2 (New Swap) (Optimized with noSwap)
function bubbleSort(arr) {
    let noSwap;
    const swap = (arr, idx1, idx2) => {
      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    
    for(let i = arr.length; i > 0; i--) {
        noSwap = true
        for(let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]) { 
                //SWAP
                swap(arr, j, j + 1);
                noSwap = false
            }
        }
        if(noSwap) break;
        console.log('ONE PASS COMPLETE');
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);