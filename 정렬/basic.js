const numbers = [15, 52, 23, 11, 9];

// 오름차순 정렬, 원본 배열 수정
numbers.sort((a, b) => a - b);
// 내림차순 정렬, 원본 배열이 다시 수정
numbers.sort((a, b) => b - a);
