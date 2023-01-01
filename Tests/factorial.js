//accept a number input
//loop over the number while subtracting 1 from the number until 1 is reached
//multiply num by the number - 1
//return the result
function factorial(num) {
    if(num <= 0) return false;
    total = 1;
    for (i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

console.log(factorial(3));