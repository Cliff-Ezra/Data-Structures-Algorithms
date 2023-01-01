//Define a function that accepts a list of numbers
//Figure out how many digits the largest number has
//Loop from k = 0 up to this largest number of digits
//For each iteration of the loop:
//  Create buckets for each digit (0-9)
//  Place each number in the corresponding bucket based on its kth digit
//Replace our existing array with values in ourt buckets, starting with 0 and going up to 9
//Return the list at the end

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  // getDigit(7323, 2);
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  // digitCount(423);
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  // mostDigits([23,567,12343353,90]);
  
  
  function radixSort(nums) {
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++) {
          let digitBuckets = Array.from( {length: 10}, () => []);
          for(let i = 0; i < nums.length; i++) {
              let digit = getDigit(nums[i], k);
              digitBuckets[digit].push(nums[i]);
          }
          console.log(digitBuckets);
          nums = [].concat(...digitBuckets)
          console.log(nums);
      }
      return nums;
  }
  radixSort([2,345,5467,12,2345,9852]);