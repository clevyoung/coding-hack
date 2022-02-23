const numbers = [15, 52, 23, 11, 9];

// 오름차순 정렬, 원본 배열 수정
numbers.sort((a, b) => a - b);
// 내림차순 정렬, 원본 배열이 다시 수정
numbers.sort((a, b) => b - a);

// 형식화 배열(Typed Array)
const copyNumbers = new Int32Array(numbers);

copyNumbers.sort();

// 원본 배열을 수정하기 않고 정렬
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
