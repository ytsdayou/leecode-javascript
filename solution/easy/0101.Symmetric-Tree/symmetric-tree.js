/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isSymmetric = function(root) {
    let arr = [];
    treeToArr(root, 0);

    let left = 0, right = 0;
    while( right < arr.length ) {
        let i = left, j = right;
        while( i <= j ) {
            if( arr[i] !== arr[j] ) return false;

            i++; j--;
        }

        left = left * 2 + 1;
        right = right * 2 + 2;
    }

    return true;

    function treeToArr(node, i) {
        arr[i] = node ? node.val : null;

        if( node ) {
            treeToArr(node.left, 2 * i + 1);
            treeToArr(node.right, 2 * i + 2);
        }
    }
};

export const isSymmetric2 = function(root) {
    if( !root ) return true;
    return checkSymmetric(root.left, root.right);
}

function checkSymmetric(left, right) {
    if( !left && !right ) return true;
    if( !left || !right ) return false;

    if( left.val !== right.val ) return false;
    
    return checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
}