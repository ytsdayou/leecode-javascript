export const TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

export const ArrayToBinaryTree = function(nums) {
    if (nums === null || nums.length === 0) return null;
  
    let root = new TreeNode(nums[0]);
    let nodeQueen = [root];
    let lastIndex = 0;

    while( nodeQueen.length ) {
        const n = nodeQueen.length;

        for( let i = 0; i < n; i++ ) {
            const node = nodeQueen.shift();

            const nextLeftIndex = lastIndex + i * 2 + 1;
            const nextRightIndex = nextLeftIndex + 1;

            if( nextLeftIndex < nums.length && nums[nextLeftIndex] !== null ) {
                const leftChild = new TreeNode(nums[nextLeftIndex]);
                node.left = leftChild;
                nodeQueen.push(leftChild);
            }

            if( nextLeftIndex < nums.length && nums[nextRightIndex] !== null ) {
                const rightChild = new TreeNode(nums[nextRightIndex]);
                node.right = rightChild;
                nodeQueen.push(rightChild);
            }
        }

        lastIndex += n * 2;
    }
  
    return root;
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