/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const rightSideView = function(root) {
    if( !root ) return [];

    let ret = [], queen = [root];

    while( queen.length ) {
        const n = queen.length;

        for( let i = 0; i < n; i++ ) {
            const node = queen.shift();
            if( i === n - 1 ) {
                ret.push(node.val);
            }

            node.left && queen.push(node.left);
            node.right && queen.push(node.right);
        }
    }

    return ret;
};