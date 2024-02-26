/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = function(root) {
    if( !root ) return [];

    let queen = [root], ret = [];

    while(queen.length) {
        const n = queen.length;
        let arr = [];

        for(let i = 0; i < n; i++) {
            const node = queen.shift();
            arr.push(node.val);

            node.left && queen.push(node.left);
            node.right && queen.push(node.right);
        }

        ret.push(arr);
    }

    return ret;
};