/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
*	시간복잡도 : O(n) nums의 크기많큼 반복문을 돌려준다
*	공간복잡도 : O(n) 반환을 위한 배열이 nums의 크기와 같다, 즉 비레한다
*/

var maxSlidingWindow = function (nums, k) {
    const q = []; // 최대값 추적을 위해 인덱스를 저장하는 배열
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        
        // 큐에서 현재 요소 cur보다 작거나 같은 값을 제거 
        // 이를통해 최대값, 그다음값 이런식으로 q에 쌓이게 된다
        while (q.length > 0 && nums[q[q.length - 1]] <= cur) {
            q.pop();
        }
        
        // 현재 인덱스 i를 큐에 추가
        q.push(i);
        
        // 슬라이딩 윈도우에서 벗어난 경우 큐에서 첫 번째 요소 제거
        // q의 맨왼쪽, 최대값이 윈도우에서 벗어났는지를 확인하는 과정
        if (q[0] === i - k) {
            q.shift();
        }
        
        // 슬라이딩 윈도우의 크기가 k에 도달한 경우, 큐의 첫 번째 요소에 해당하는 값(현재 슬라이딩 윈도우 내의 최대값)을 결과 배열에 추가
        // 이를 통해 첫 인덱스부터 k크기의 윈도우 안에있는 값들을 모두 확인한뒤 최대값을 배열에 넣어주고 그 이후에는 한칸씩 이동하므로
        // 매번 최대값을 넣어주는 모양이 된다.
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;
};