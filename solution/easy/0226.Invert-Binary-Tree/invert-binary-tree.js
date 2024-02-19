/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export const invertTree = function(root) {
    if( !root ) return root;

    let tmpLeft = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmpLeft);

    return root;
};