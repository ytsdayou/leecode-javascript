/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export const isSameTree = function(p, q) {
    return checkNode(p, q);

    function checkNode(nodeP, nodeQ) {
        if( nodeP && nodeQ ) {
            return nodeP.val === nodeQ.val && checkNode(nodeP.left, nodeQ.left) && checkNode(nodeP.right, nodeQ.right);
        } else if( !nodeP && !nodeQ ) {
            return true;
        }

        return false;
    }
};