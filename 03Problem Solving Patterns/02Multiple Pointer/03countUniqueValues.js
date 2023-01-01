function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let i = 0;
    for(j = 1 ; j < arr.length; j++) {
        if(arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        } 
        // console.log(i,j);
    }
    return i + 1;
}

countUniqueValues([1,1,2,2,2,3,4,5,6,6,7,7]);
// countUniqueValues([]);