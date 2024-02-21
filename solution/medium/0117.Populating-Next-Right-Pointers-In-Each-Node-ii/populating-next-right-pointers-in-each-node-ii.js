import { Node } from "../../../structures/TreeNode";

/**
 * @param {Node} root
 * @return {Node}
 */
export const connect = function(root) {
    if( !root ) return null;

    let queen = [root];

    while( queen.length ) {
        let last = null;
        let n = queen.length;

        for( let i = 0; i < n; i++ ) {
            const node = queen.shift();
            
            node.left && queen.push(node.left);
            node.right && queen.push(node.right);

            if( last ) {
                last.next = node;
            }

            last = node;
        }
    }

    return root;
};


export const connect2 = function(root) {
    if( !root ) return null;

    let start = root;
    while( start ) {
        last = null;
        nextStart = null;

        for( let p = start; p !== null; p = p.next ) {
            if( p.left ) {
                handle(p.left);
            }
            if( p.right ) {
                handle(p.right);
            }
        }

        start = nextStart;
    }

    return root;
}

let last = null, nextStart = null;
function handle(node) {
    if( nextStart === null ) {
        nextStart = node;
    }

    if( last !== null ) {
        last.next = node;
    }

    last = node;
}