const paragraph =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst);

const indexOfLast = paragraph.lastIndexOf(searchTerm);
console.log(indexOfLast);
