import { 
    connect 
} from "../../../solution/medium/0117.Populating-Next-Right-Pointers-In-Each-Node-ii/populating-next-right-pointers-in-each-node-ii.JS";
import { ArrayToBinaryTree, ArrayToBinaryTreeWithNext } from "../../../structures/TreeNode";

describe("0117.Populating-Next-Right-Pointers-In-Each-Node-ii", () => {

    test('Input: root = [1,2,3,4,5,null,7], Output: [1,#,2,3,#,4,5,7,#]', () => {
        const root = [1,2,3,4,5,null,7];
        const p = ArrayToBinaryTree( root );
        const q = ArrayToBinaryTreeWithNext(root)
        const r = connect(p);
        expect( r ).toEqual( q );
    });

    test('Input: root = [], Output: []', () => {
        const root = [];
        const p = ArrayToBinaryTree( root );
        const q = ArrayToBinaryTreeWithNext(root)
        expect( connect(p) ).toEqual( q );
    });

});