export const TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

export const ArrayToBinaryTree = function(arr) {
    return getNode(arr, 0);
}

function getNode(arr, i) {
    if( i >= arr.length || arr[i] === null ) return null;

    let node = new TreeNode(arr[i]);
    node.left = getNode(arr, 2 * i + 1);
    node.right = getNode(arr, 2 * i + 2);

    return node;
}