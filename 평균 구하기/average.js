const arr = [1, 2, 3];

const result = arr.reduce((sum, currValue) => sum + currValue, 0);

const average = result / arr.length;

console.log(average);
