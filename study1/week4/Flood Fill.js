/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
/**
*	시간복잡도 : O(n) 정확히는 잘 모르겠다. image의 크기보다 더 많은 연산을 하게되는거 같은데 느린 O(n)이 아닐까 추정
*	공간복잡도 : O(n) visited의 공간이 최악의 경우 image 공간만큼 사용된다
*/

var floodFill = function (image, sr, sc, color) {
    const visited = [];
    let needVisit = [];
    const searchPoint = image[sr][sc];

    needVisit.push([sr, sc]);

    while (needVisit.length !== 0) {
        const [x, y] = needVisit.shift();
        if (!isArrayInArray(visited, [x, y]) && image?.[x]?.[y] != undefined && image[x][y] === searchPoint) {
            visited.push([x, y]);
            image[x][y] = color;
            needVisit = [...needVisit, [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
        }
    }
    return image;
};

function isArrayInArray(arr, item) {
    var item_as_string = JSON.stringify(item);

    var contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}
