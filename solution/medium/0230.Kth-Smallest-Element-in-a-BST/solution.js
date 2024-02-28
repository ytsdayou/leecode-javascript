/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
export const kthSmallest = function(root, k) {
    let i = 1, ret = null;

    dfs(root);

    return ret;

    function dfs(node) {
        if(node) {
            dfs(node.left);

            if( i === k ) {
                ret = node.val;
            }
            i++;

            dfs(node.right);
        }
    }
};