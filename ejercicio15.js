function isEven(numbers) {
    return numbers.length % 2 === 0;
  }
  

let numbers = [1, 2, 3, 2, 1];
let result = isEven(numbers);
console.log(result); // false

numbers = [1, 2, 3, 2,0];
result = isEven(numbers);
console.log(result); // true
