/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const averageOfLevels = function(root) {
    let queen = [root], ret = [];

    while(queen.length) {
        const n = queen.length;
        let arr = [];
        for(let i = 0; i < n; i++) {
            const node = queen.shift();
            arr.push(Number(node.val));

            if( node.left ) queen.push(node.left);
            if( node.right ) queen.push(node.right);
        }

        const tot = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        ret.push( Number( ( tot / arr.length ).toFixed(5) ) );
    }

    return ret;
};