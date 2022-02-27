function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    swap(array, i, min);
  }

  return array;
}

console.log(selectionSort([6, 5, 1, 4, 3, 2]));
