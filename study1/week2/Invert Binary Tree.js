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
 * @return {TreeNode}
 */
/**
 * 공간복잡도 : O(n) swap에서 한번씩 tmpNode가 사용됨
 * 시간복잡도 : O(n) 최악의 경우 이진트리에서 한쪽으로 쭉 내려갈 수 있으므로
 * root의 크기에 따라 비례적으로 증가할것
 */
var invertTree = function (root) {
    if(!root) return null;

    if (root.left != null && root.right != null) {
        invertTree(root.left);
        invertTree(root.right);
        rootSwap(root);
    } else if (root.left == null && root.right != null) {
        invertTree(root.right);
        rootSwap(root);
    } else if (root.left != null && root.right == null) {
        invertTree(root.left);
        rootSwap(root);
    }

    return root;
};

var rootSwap = function (root) {
    let tmpNode = null;
    tmpNode = root.left;
    root.left = root.right;
    root.right = tmpNode;
}