/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/**
*	시간복잡도 : O(nlogn) sort 함수를 사용하고 그 외의 연산에서는 strs 배열 길이에 비례한 반복문만 존재한다.
*	공간복잡도 : O(n) 주어진 배열의 크기만큼 새로운 배열을 만들어서 사용한다.
*/

var groupAnagrams = function (strs) {
    const sortedArr = {};
    strs.forEach((value) => {
        let sortedVal = [...value].sort().join('');
        if (sortedArr[sortedVal] != undefined) {
            sortedArr[sortedVal].push(value);
        } else {
            sortedArr[sortedVal] = [value];
        }

    });

    const ret = [];
    for (const key in resultarr) {
        ret.push(resultarr[key]);
    }

    return ret;

};
