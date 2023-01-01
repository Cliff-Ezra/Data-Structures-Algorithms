function anagram(str1, str2) {
    //check the length of both strings to make sure they match
    //convert both strings into objects
    //compare both of the objects formed to make sure the number of keys(letters) match
    //return true if the strings are anagrams
    if(str1.length !== str2.length) {
        return false;
    }

    let stringCounter1 = {};
    let stringCounter2 = {};

    for(let pos of str1) {
        stringCounter1[pos] = (stringCounter1[pos] || 0) + 1;
    }
    for(let pos of str2) {
        stringCounter2[pos] = (stringCounter2[pos] || 0) + 1;
    }
    console.log(stringCounter1, stringCounter2);

}

anagram('iceman', 'cinema');