/**
 * @param {number} numRows
 * @return {number[][]}
 */
/**
*   시간복잡도 : O(n^2) : n만큼 배열이 깊어지고 2차배열또한 n이 커질수록 늘어나기 때문에 n^2이다
*	공간복잡도 : O(n^2) : 시간복잡도와 비슷한 설명이 될것 같다.
*/

var generate = function (numRows) {
    let resultArr = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        resultArr[i] = new Array(i+1);
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === resultArr[i].length - 1) {
                resultArr[i][j] = 1;
            } else {
                sum(resultArr, i, j);
            }
        }
    }
    return resultArr;
};

var sum = function (arr, row, col) {
    arr[row][col] = arr[row - 1][col - 1] + arr[row - 1][col];
}