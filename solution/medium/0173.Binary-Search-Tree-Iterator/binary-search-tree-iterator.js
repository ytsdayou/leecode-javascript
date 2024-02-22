/**
 * @param {TreeNode} root
 */
export const BSTIterator = function(root) {
    let treeArr = [];
    this.pointer = -1;

    inOrderTraversal(root);
    this.treeArr = treeArr;

    function inOrderTraversal(root) {
        if( root ) {
            inOrderTraversal(root.left);
            treeArr.push(root.val);
            inOrderTraversal(root.right);
        }
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.pointer++;
    return this.pointer < this.treeArr.length && this.treeArr.length > 0 ? this.treeArr[this.pointer] : null;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return  this.treeArr.length > 0 && this.pointer + 1 < this.treeArr.length;
};