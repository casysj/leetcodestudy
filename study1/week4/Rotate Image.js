/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let storeTemp1;
    let storeTemp2;
    let startRow = 0
    let endRow = matrix[0].length-1;
    let i = 0;
    while (startRow < endRow) {
        storeTemp1 = matrix[startRow + i][endRow];
        matrix[startRow + i][endRow] = matrix[startRow][startRow + i];

        storeTemp2 = matrix[endRow][endRow - i];
        matrix[endRow][endRow - i] = storeTemp1;

        storeTemp1 = matrix[endRow - i][startRow];
        matrix[endRow - i][startRow] = storeTemp2;

        matrix[startRow][startRow + i] = storeTemp1;
        i++;
        if (startRow + i === endRow) {
            startRow++;
            endRow--;
            i = 0;
        }
    }
};