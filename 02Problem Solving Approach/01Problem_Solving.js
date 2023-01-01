// ==============================================================
// Write a function which takes in a string and returns counts of
// each character in the string
// ==============================================================
// STEP 1: UNDERSTANDING THE PROBLEM
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs?
//    Do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are part of the problem?

// STEP 2: EXPLORING CONCRETE EXAMPLES
// 1. Simple examples
// => charCount("aaaa"); // {a:4, b:0, c:0}
// => charCount("Hello"); // {h;1, e:1, l:2, o:1}
// 2. More complex examples
// => "my phone number is 188749" // This input has spaces and numbers
// => "Hello This" // This input has different cases
// 3. Examples with empty inputs
// => charCount("") // What should be the outputs {}
// 4. Expamples with invalid inputs
// => Passing in a number, an object, null

// STEP 3: BREAK DOWN THE PROBLEM
function charCount(str) {
    // return an object with keys that are lowercase alphanumeric characters in a string
    // ;values should be the counts for those characters
}

// STEP 4: SOLVE/SIMPLIFY
// function charCount(str) {
//     // make object to return at end
//     let result = {};
//     // loop over string, for each char
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         // if the char is a number/letter AND key in object, add one to count
//         if (result[char] > 0) {
//             result[char]++;
//         }
//         // if char is a number/letter AND not in object, add it and set value to 1
//         else 
//         {
//             result[char] = 1
//         }
//     }
//         // if char is smth else (space, period etc...) dont do anything
//     // return object at end
//     return result;
// }  

// STEP 5: LOOK BACK & REFACTOR
// REFACTOR 1
// function charCount(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)){
//             if(obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// REFACTOR 2
// function charCount(str) {
//     let obj = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)){
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// REFACTOR 3
function charCount(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&  // numeric (0-9)
       !(code > 64 && code < 91) &&  // upper alpha (A-Z)
       !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
        }
    return true;
}