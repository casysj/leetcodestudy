/**
 * @param {string} s
 * @return {number}
 */

/**
*	시간복잡도 : O(n) 주어진 문자열의 길이만큼 반복문을 실행한다.
*	공간복잡도 : O(n) 맵을사용해서 최악의 경우 문자열의 길이만큼 공간을 사용한다.
*/

var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let substringStartIndex = 0;
    let curLength = 0;
    let checkLength = 0;

    for (let idx = 0; idx < s.length; idx++) {
        if (!map.has(s[idx])) {
            curLength++;
        } else if (map.get(s[idx]) >= substringStartIndex) {
            substringStartIndex = map.get(s[idx]) + 1;
            curLength = idx - substringStartIndex + 1
        } else {
            curLength++;
        }
        map.set(s[idx], idx);
        checkLength = curLength > checkLength ? curLength : checkLength;
    }

    return checkLength;
};