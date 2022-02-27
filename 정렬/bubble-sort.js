function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }

  return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
