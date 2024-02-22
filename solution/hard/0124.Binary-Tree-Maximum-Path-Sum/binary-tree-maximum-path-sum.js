/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxPathSum = function(root) {
    let ret = root.val;

    function dfs(root) {
        if( !root ) {
            return 0;
        }

        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        ret = Math.max(ret, root.val + leftMax + rightMax);

        return root.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return ret;
};