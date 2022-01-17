function solution(arr) {
  return [...new Set(arr)];
}

console.log(solution([1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9]));
