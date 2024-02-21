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

export const Node = function(val, left, right, next) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = next === undefined ? null : next;
}

export const ArrayToBinaryTreeWithNext = function(arr) {
    const root = ArrayToBinaryTree(arr);

    return connect(root);
}   

function connect(root) {
    if( !root ) return null;

    let queen = [root];

    while( queen.length ) {
        let last = null;
        let n = queen.length;

        for( let i = 0; i < n; i++ ) {
            const node = queen.shift();
            
            node.left && queen.push(node.left);
            node.right && queen.push(node.right);

            node.next = null;
            if( last ) {
                last.next = node;
            }

            last = node;
        }
    }

    return root;
}