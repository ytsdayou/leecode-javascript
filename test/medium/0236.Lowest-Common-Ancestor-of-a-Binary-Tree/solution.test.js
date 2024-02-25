import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    lowestCommonAncestor 
} from "../../../solution/medium/0236.Lowest-Common-Ancestor-of-a-Binary-Tree/solution";

describe("0236.Lowest-Common-Ancestor-of-a-Binary-Tree", () => {

    test('Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1, Output: 3', () => {
        const root = ArrayToBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
        
        let cache = new Map();
        dfs(root, cache);

        expect( lowestCommonAncestor(root, cache.get(5), cache.get(1)) ).toEqual( cache.get(3) );
    })

    test('Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4, Output: 5', () => {
        const root = ArrayToBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);

        let cache = new Map();
        dfs(root, cache);

        expect( lowestCommonAncestor(root, cache.get(5), cache.get(4)) ).toEqual( cache.get(5) );
    })

    test('Input: root = [1,2], p = 1, q = 2, Output: 1', () => {
        const root = ArrayToBinaryTree([1, 2]);

        let cache = new Map();
        dfs(root, cache);

        expect( lowestCommonAncestor(root, cache.get(1), cache.get(2)) ).toEqual( cache.get(1) );
    })

});


function dfs(root, cache) {
    if(root) {
        if( root.left ) dfs(root.left, cache)
        if( root.right ) dfs(root.right, cache);

        cache.set(root.val, root);
    }
}