/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
/**
 * 시간복잡도 : O(n) 이전 이진트리 문제와 마찬가지로 최악의 경우 노드 갯수만큼의 깊이로 탐색하고
 * 각 경우마다 비교연산이 이루어지므로
 * 공간복잡도 : O(n) 탐색이 이루어지면서 동시에 그 횟수 만큼이나 값을 리턴해주기 때문에
 */
var rangeSumBST = function (root, low, high) {
    if (!root) return 0;

    if (root.left != null && root.right != null) {
        return rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high) + valueIfInRange(root.val, low, high);
    } else if (root.left == null && root.right != null) {
        return rangeSumBST(root.right, low, high) + valueIfInRange(root.val, low, high);
    } else if (root.left != null && root.right == null) {
        return rangeSumBST(root.left, low, high) + valueIfInRange(root.val, low, high);
    }

    return valueIfInRange(root.val, low, high);
};

var valueIfInRange = function (val, low, high) {
    return (low <= val && val <= high) ? val : 0;
}

// 간소화
var rangeSumBST = function (root, low, high) {
    if (!root) return 0;

    return rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high) + valueIfInRange(root.val, low, high);
};