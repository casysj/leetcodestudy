/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 이전 문제에서는 quicksort가 처음 등장하고 이 문제의 시간복잡도를 스스로 알아내지 못했다. [잘 몰라서]
 * 이번 문제는 quicksort가 O(nlogn)을 가진다는걸 미리 아는상태로 보자면 이 문제도 O(nlogn)이라고 생각한다.
 * 두번의 for문을 돌리는데 각각 O(n)에 해당한다. nlogn + n 이라서 O(nlogn)이다
 * 근데 너무 느려서 알고리즘을 사용해서 해결할 방법을 찾아봐야할 것 같다.
 */
var findErrorNums = function (nums) {
    let prev;
    let loss;
    // nums.sort(function (a, b) {
    //     if (a > b) return -1;
    //     if (a === b) return 0;
    //     if (a < b) return 1;
    // })
    sort(nums, 0, nums.length-1);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prev = nums[0];
            continue;
        }

        if (prev === nums[i]) {
            break;
        } else {
            prev = nums[i];
        }
    }
    for (let idx = 1; idx <= nums.length; idx++) {
        if (!nums.includes(idx)) {
            loss = idx;
            break;
        }
    }
    return [prev, loss];
};


var sort = function (arr, left, right) {
    if (left >= right) {
        return;
    }
    const index = partition(arr, left, right);
    if (left < index - 1) {
        sort(arr, left, index - 1);
    }

    if (index < right) {
        sort(arr, index, right);
    }
}


var partition = function (arr, left, right) {
    let pivotVal = arr[Math.floor((left + right) / 2)];
    while (left <= right) {

        while (pivotVal > arr[left]) {
            left++;
        }
        while (pivotVal < arr[right]) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            right--;
            left++;
        }
    }
    return left;
}

var swap = function (arr, start, end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
};