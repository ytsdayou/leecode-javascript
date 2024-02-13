/**
 * We can solve this problem by using stack data structure.
 * 1. We scan through the string of `path`, and mark the folder name  using a 
 *    variable `folder` initialized to empty string, when encoutering the character 
 *    is not "/", we append the character to the variable `folder`. Otherwise, we should
 *    operate on stack depend on the folder name, if the folder is '..', we should pop
 *    a element from stack. if the folder is '.' or a empty string, we should ignore it,
 *    else we should push the folder name to stack.
 * 2. finally, we join the stack by character '/' to a string which with a prefix '/'.
 * @param {string} path
 * @return {string}
 */
export const simplifyPath = function(path) {
    let stack = [], folder = "";
    path = path + "/";

    for( let i = 0; i < path.length; i++ ) {
        if( path[i] === '/' ) {
            if( folder === '..' ) {
                stack.pop();
            } else if( folder !== '.' && folder !== '' ) {
                stack.push(folder);
            }
            folder = "";
        } else {
            folder += path[i];
        }
    }

    return "/" + stack.join("/");
};