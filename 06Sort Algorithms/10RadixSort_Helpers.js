//! getDigit helper function
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  // getDigit(7323, 2);
  //Math.abs(num) / Math.pow(10, i) => 7323/100 
  //73.23
  //Math.floor() => 73
  //%10 => 73 % 10 === 3
  
  //! digitCount helper function
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  // digitCount(423);
  // Math.log10(423) => 2.6263403673750423
  // Math.floor(2.6263403673750423) => 2
  // + 1 => 3
  
  //! mostDigits helper function
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  mostDigits([23,567,12343353,90]);
  // returns 8