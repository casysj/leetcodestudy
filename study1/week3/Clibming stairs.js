/**
 * @param {number} n
 * @return {number}
 */
/**
*	시간복잡도 : O(n) 루프에서 최대 n까지 연산을 반복해주기 때문에.
*	공간복잡도 : O(1) n의 크기와 상관없이 3개의 변수만 사용된다.
*/

var climbStairs = function (n) {
    if (n === 1 || n === 0) return 1;

    let one = 1;
    let two = 2;
    let answer = 0;

    for (let i = 3; i <= n; i++) {
        answer = one + two;
        one = two;
        two = answer;
    }
    return two;
};