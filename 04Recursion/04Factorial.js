// ITERATIVE
// function factorial(num) {
//     if(num <= 0) return false;
//     total = 1;
//     for (i = num; i > 1; i--) {
//         total *= i
//     }
//     return total;
// }
// factorial(3);

// RECURSIVE
function factorial(num) {
    if(num === 1) return 1
    return num * factorial(num -1);
}
factorial(4);