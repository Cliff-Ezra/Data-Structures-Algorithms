//Call the pivot helper on the array
//When the helper returns to you the updated pivot index, recursively call the pivot helper on the 
// subarray to the left of that index, and the subarray to the right of that index
//Your base case occurs when you consider a subbaray with less than 2 elements

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex-1)
        //right
        quickSort(arr, pivotIndex + 1, right);
        }
    return arr;
}

// quickSort([4,6,9,1,2,5,3]);
//[4,6,9,1,2,5,3]
//[3,2,1,4,6,9,5]
//       4
// 3,2,1   6,9,5
//     3     6
// 2,1      5  9
//   2
// 1

function pivot(arr, start=0, end=arr.length+1) {
    let pivot = arr[start];
    let swapIndex = start;

    const swap = (arr, idx1, idx2) => {
      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }

    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
            // console.log(arr);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
// pivot([4,8,2,1,5,7,6,3]);