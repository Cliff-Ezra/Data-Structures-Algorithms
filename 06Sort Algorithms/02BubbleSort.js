// !Pseudocode
//Create a function that accepts an array of numbers
//Start looping with a variable called i from the end of the array towards the beginning
//Start an inner loop with a variable called j from the beginning until i-1
//If arr[j] is greater than arr[j+1], swap those two values
//Return the sorted array

//! The 2 Swapping Methods
// ES5
// function swap(arr, idx1, idx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES2015
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
// }

// !Refactored Solution 1 (Old Swap)
// function bubbleSort(arr) {
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i-1; j++) {
//             console.log(i, j);
//             console.log(arr, arr[j], arr[j + 1]);
//             if(arr[j] > arr[j + 1]) { 
//             //SWAP
//             let temp = arr[j];
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp;
//             }
//         }
//         console.log('ONE PASS COMPLETE');
//     }
//     return arr;
// }

// bubbleSort([37,45,29,8,12,88,-3]);


// !Refactored Solution 2 (New Swap)
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            console.log(i, j);
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]) { 
            //SWAP
            swap(arr, j, j + 1);
            }
        }
        console.log('ONE PASS COMPLETE');
    }
    return arr;
}

bubbleSort([37,45,29,8,12,88,-3]);

//! Naive Solution 
// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             console.log(i, j);
//             console.log(arr, arr[j], arr[j + 1]);
//             if(arr[j] > arr[j + 1]) { 
//             //SWAP
//             let temp = arr[j];
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
