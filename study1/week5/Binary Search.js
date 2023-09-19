/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
*	시간복잡도 : O(logn) 이진탐색의 기본값 logn
*	공간복잡도 : O(1) nums의 크기와 상관없이 고정된 변수의 갯수만 사용
*/

var search = function (nums, target) {
    let high = nums.length - 1;
    let mid;
    let low = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};