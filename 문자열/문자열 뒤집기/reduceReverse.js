const reduceReverse = (str) => {
  return str.split('').reduceRight((sentence, letter) => (sentence += letter));
};

console.log(reduceReverse('algorithm'));
