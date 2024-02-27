/**
 * @param {TreeNode} root
 * @return {number}
 */
export const getMinimumDifference = function(root) {
    let prev = null, ret = Number.MAX_VALUE;

    dfs(root);

    return ret;

    function dfs(node) {

        if(node) {

            dfs(node.left);

            if( prev ) {
                ret = Math.min(ret, node.val - prev.val);
            }
            prev = node;

            dfs(node.right);

        }

    }
};