//Example without using Map Function.
// Given an array ,give me back a new array in which every value is multiply by 2.

const input = [1, 2, 3, 4, 5];

const newArr = [];

for (let i = 0; i < input.length; i++) {
  newArr.push(input[i] * 2);
}
console.log(newArr);

//Or Using Map function

const number = [1, 2, 3, 4, 5];

function transform(i) {
  return i * 2;
}

const result = input.map(transform);
console.log(result);
