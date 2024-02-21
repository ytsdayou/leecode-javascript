/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
export const flatten = function(root) {
    dfs(root);

    function dfs(root) {
        if( !root ) return null;

        let leftTail = dfs(root.left);
        let rightTail = dfs(root.right);

        if( root.left ) {
            leftTail.right = root.right;
            root.right = root.left;
            root.left = null;
        }

        return rightTail || leftTail || root;
    }
};