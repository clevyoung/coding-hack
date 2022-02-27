function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    let j = i - 1;

    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

console.log(insertionSort([14, 31, 45, 17, 21, 9, 2, 26]));
