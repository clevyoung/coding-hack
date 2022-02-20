const obj = {
  bread: 1,
  apple: 6,
  milk: 1,
  orange: 3,
  broccoli: 2,
};

const sortedArr = Object.entries(obj)
  .sort((a, b) => b[1] - a[1])
  .map((el) => el[0]);

console.log(sortedArr);
