/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = function(root, p, q) {
    let ret = null;

    dfs(root);
    return ret;

    function dfs(root) {
        if( !root ) {
            return false;
        }

        let lson = dfs(root.left);
        let rson = dfs(root.right);

        if( ( lson && rson ) || ( ( root.val === p.val || root.val === q.val ) && ( lson || rson ) ) ) {
            ret = root;
        }

        return lson || rson || root.val === p.val || root.val === q.val;
    }
};