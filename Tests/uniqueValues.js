//declare 2 pointer values for traversing the array(i, j)
//iterate through the array using the second pointer (j)
//compare the value of i with j 
//if they are the same move j to the next value
//if they are different move i to the next value and move j forward and compare again
//return the index of i and add 1 to get the number of unique values

function countUniqueValues(arr) {
    let i = 0;
    
    for(j = 1 ; j < arr.length; j++) {
        if(arr[j] === arr[i]) {
            continue;
        } else {
            i++;
        }
    }
    return i + 1;
}

countUniqueValues([1,1,1,1,1,2]);
console.log(countUniqueValues([1,1,1,1,1,2]));