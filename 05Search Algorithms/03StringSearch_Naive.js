//create a function that accepts 2 strings as the input
//loop over the longer string
//loop over the shorter string
//if the characters don't match, break out ov the inner loop
//if the characters do match, keep going
//if you complete the inner loop and find a match, increment the count of matches
//return the count
function naiveSearch(long, short) {
var count = 0;
    for(var i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j]);
            if(short[j] !== long[i + j]) {
                console.log('BREAK');
                break;
            }
            if(j === short.length - 1) {
                console.log('FOUND ONE')
                count ++;
            }
        }
    }
    return console.log(count);
}

naiveSearch('lorie loled loling all the way lol', 'lol');

//REFACTOR
function naiveSearch(long, short) {
    var count = 0;
    for(var i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1) count ++;
        }
    }
    return count;
}

naiveSearch('lorie loled loling all the way lol', 'lol');