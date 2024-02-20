import { TreeNode } from "../../../structures/TreeNode";

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
export const buildTree = function(inorder, postorder) {
    if( !inorder.length || !postorder.length ) {
        return null;
    }

    let n = postorder.length;
    let root = new TreeNode(postorder[n - 1]);
    let mid = inorder.indexOf(postorder[n - 1]);
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
    root.right = buildTree(inorder.slice(mid+1), postorder.slice(mid, n - 1));
    
    return root;
};