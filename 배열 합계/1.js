const sum = (nums) => {
  return nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

console.log(sum([1, 2, 3]));
