/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const zigzagLevelOrder = function(root) {
    if( !root ) return [];

    let queen = [root], ret = [], ord = true;

    while(queen.length) {
        let n = queen.length, tmp = Array.from(queen), arr = [];

        for(let i = 0; i < n; i++) {
            const node = ord ? tmp.shift() : tmp.pop();
            const node2 = queen.shift();

            arr.push(node.val);
            node2.left && queen.push(node2.left);
            node2.right && queen.push(node2.right);
        }

        ord = !ord;
        ret.push(arr);
    }

    return ret;
};