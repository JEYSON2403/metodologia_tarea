function isPalindrome(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      if (numbers[left] !== numbers[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let numbers = [1, 2, 3, 2, 1];
let result = isPalindrome(numbers);
console.log(result); // true

numbers = [1, 2, 3, 4, 5];
result = isPalindrome(numbers);
console.log(result); // false