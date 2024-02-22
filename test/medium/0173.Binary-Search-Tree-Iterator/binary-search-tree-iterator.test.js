import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    BSTIterator 
} from "../../../solution/medium/0173.Binary-Search-Tree-Iterator/binary-search-tree-iterator";

describe("0173.Binary-Search-Tree-Iterator", () => {

    test('Input["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]', () => {
        // [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
        // Output: [null, 3, 7, true, 9, true, 15, true, 20, false]
        let root = ArrayToBinaryTree([7, 3, 15, null, null, 9, 20]);
        let obj = new BSTIterator(root)
        let ret = obj.next();
        expect( ret ).toEqual( 3 );
        ret = obj.next();
        expect( ret ).toEqual( 7 );
        ret = obj.hasNext();
        expect( ret ).toEqual( true );
        ret = obj.next();
        expect( ret ).toEqual( 9 );
        ret = obj.hasNext();
        expect( ret ).toEqual( true );
        ret = obj.next();
        expect( ret ).toEqual( 15 );
        ret = obj.hasNext();
        expect( ret ).toEqual( true );
        ret = obj.next();
        expect( ret ).toEqual( 20 );
        ret = obj.hasNext();
        expect( ret ).toEqual( false );
    });

});