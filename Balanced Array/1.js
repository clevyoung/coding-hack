const balancedArray = (array) => {
  let total = array.reduce((a, b) => a + b);
  let sumLeft = 0;

  for (let i = 0; i < array.length; i++) {
    total = total - array[i];
    if (sumLeft === total) {
      return i;
    }
    sumLeft += array[i];
  }
  return -1;
};

console.log(balancedArray([1, 2, 5, 3]));
