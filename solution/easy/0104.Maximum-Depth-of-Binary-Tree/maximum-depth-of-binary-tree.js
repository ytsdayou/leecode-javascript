/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function(root) {
    return getDepth(root, 0);

    function getDepth(node, depth) {
        if( !node ) return depth;

        return Math.max( getDepth(node.left, depth + 1), getDepth(node.right, depth + 1) )
    }
};