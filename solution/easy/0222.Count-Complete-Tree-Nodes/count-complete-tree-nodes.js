/**
 * @param {TreeNode} root
 * @return {number}
 */
export const countNodes = function(root) {
    if( !root ) return 0;

    let queen = [root], ret = 1, flag = true;

    while( flag ) {
        const n = queen.length;

        for( let i = 0; i < n; i++ ) {
            const node = queen.shift();
            if( node.left ) {
                ret++;
                queen.push(node.left);
            } else {
                flag = false;
            }

            if( node.right ) {
                ret++;
                queen.push(node.right);
            } else {
                flag = false;
            }
        }
    }

    return ret;
};