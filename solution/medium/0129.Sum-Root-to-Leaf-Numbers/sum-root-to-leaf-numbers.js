/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumNumbers = function(root) {
    let arr = [], sum = 0;
    dfs(root);
    return sum;

    function dfs(root) {
        if( !root ) {
            return;
        }

        arr.push(root.val);

        dfs(root.left);
        dfs(root.right);

        if( !root.left && !root.right ) {
            sum += Number(arr.join(""));
        }
        arr.pop();
    }
};