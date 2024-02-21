/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
export const hasPathSum = function(root, targetSum) {
    if( !root ) return false;

    let sum = 0, flag = false;
    dfs(root);
    return flag;

    function dfs(root) {
        if( root ) {
            sum += root.val;

            if( !root.left && !root.right ) {
                if( sum === targetSum ) flag = true;
            }

            dfs(root.left);
            dfs(root.right);
            sum -= root.val;
        }
    }
};