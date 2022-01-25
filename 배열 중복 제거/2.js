/**
 * indexOf, filter 메서드를 사용하여 배열의 중복을 제거하는 방법
 */

const duplicateArr = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const uniqueArr = duplicateArr.filter((item, index) => {
  return duplicateArr.indexOf(item) === index;
});

console.log(uniqueArr);
