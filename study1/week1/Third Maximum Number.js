/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

    sort(nums, 0, nums.length - 1);
    let currentNum;
    let count = 0;
    nums.every(element => {
        if (element != currentNum) {
            count++;
            currentNum = element;
        }
        if (count == 3) {
            return false;
        }
        return true;
    });
    if (count == 3) {
        return currentNum;
    } else {
        return nums[0];
    }
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

        while (pivotVal < arr[left]) {
            left++;
        }
        while (pivotVal > arr[right]) {
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