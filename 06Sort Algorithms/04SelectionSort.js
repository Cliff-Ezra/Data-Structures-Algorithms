//Create a function that accepts an array
//Store the first element as the smallest value you've seen so far
//Compare this item to the next item in the array until you find a smaller number
//If a smaller number is found:
// designate the smaller number to be the new minimum and continue until the end of the array
// if the minimum is not the value you initially began with, swap the two values

//Written in ES5 Swap Syntax
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let min = i;
//         for(let j = i + 1; j < arr.length; j++){
//             console.log(i,j);
//             if(arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if(i !== min) {
//             console.log('*******************************')
//             console.log(arr, i, min);
//             console.log('SWAPPING TO: ');
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//             console.log(arr);
//             console.log('*******************************')
//         }
//     }
//     return arr;
// }

// selectionSort([0,2,34,22,10,19,17]);
//i, j, min
//0, 1, 1
//0, 2, 2
//0, 3, 2
//0, 4, 2

//Written in ES2015 Swap Syntax
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) swap(arr, i, min);
    }
    return arr;
}

selectionSort([0,2,34,22,10,19,17]);