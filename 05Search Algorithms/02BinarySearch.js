// function binarySearch(arr, val) {
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);

//     while(arr[middle] !== val && left <= right) {
//         console.log(left, middle, right);
//         if(val < arr[middle]) {
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//         middle = Math.floor((left + right) / 2);
//     }
//     console.log(left, middle, right);
//     if(arr[middle] === val) {
//         return middle;
//     }
//     return -1;
//     // console.log(arr[middle]);
// }
// binarySearch([1,2,3,4,5,6,7,8,9,10], 5);
binarySearch([2,5,6,9,13,15,28,30], 3);

//REFACTORED
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(arr[middle] !== val && left <= right) {
        if(val < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }   
    return arr[middle] === val ? console.log(middle) : -1
}

// binarySearch([1,2,3,4,5,6,7,8,9,10], 5);
binarySearch([2,5,6,9,13,15,28,30], 15);