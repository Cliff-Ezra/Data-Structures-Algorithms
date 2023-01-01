//Break up the array into halves until you have arrays that are empty or have one element
//Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
// you are back at the full length of the array
//Once the array has been merged back together, return the merged and sorted array

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return console.log(merge(left, right));
}

mergeSort([10,24,76,73,21,55,66,34]);

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i = 0 < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // Method 1 of adding remaining elements
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++
    }
    return console.log(results);
    
    // Method 2 of adding remaining elements
    // return results.concat(arr1.slice(i)).concat(arr2.slice(j));
}
// merge([1,10,50], [2,14,99,100]);