/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = function(root) {
    let ret = true, pre = null;

    dfs(root);
    return ret;

    function dfs(node) {
        if(node) {
            dfs(node.left);

            if( pre !== null && node.val <= pre ) {
                ret = false;
            }
            pre = node.val;

            dfs(node.right);
        }
    }
};