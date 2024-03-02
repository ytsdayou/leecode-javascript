import { Node } from "../../../structures/GraphNode";

/**
 * @param {Node} node
 * @return {Node}
 */
export const cloneGraph = function(node) {
    if( !node ) return null;

    let oldToNew = new Map();

    return dfs(node);

    function dfs(node) {
        if( oldToNew.has(node) ) {
            return oldToNew.get(node);
        }

        let copy = new Node(node.val);
        oldToNew.set(node, copy);
        node.neighbors.forEach(element => {
            copy.neighbors.push(dfs(element))
        });

        return copy;
    }
};