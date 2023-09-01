/**
 * @param {number} n
 * @return {number}
 */
/**
 * 시간복잡도 : O(n) 트리의 최 하단부터 올라오면서 r안에 n에 대한 tribonacci 숫자가 저장된다.
 * 때문에 이후에 부모노드로 올라오면서 최초의 n번째에 대한 연산만 이루어진다.
 * 공간복잡도 : O(n) n 만큼 배열에 값이 저장됨.
 */
let r = [];

var tribonacci = function (n) {

    if (n === 0) return r[n] = 0;
    else if (n === 1 || n === 2) return r[n] = 1;
    else if (r[n]) return r[n];
    else return r[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};