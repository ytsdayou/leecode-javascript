import { 
    copyRandomList 
} from "../../../solution/medium/0138.Copy-List-With-Random-Pointer/copy-list-with-random-pointer";
import { ArrayToListNode } from "../../../structures/ListNodeRandom.js";

describe("0138.Copy-List-With-Random-Pointer", () => {

    test('Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]], Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]', () => {
        let head = ArrayToListNode( [[7,null],[13,0],[11,4],[10,2],[1,0]] );
        let out = ArrayToListNode( [[7,null],[13,0],[11,4],[10,2],[1,0]] );
        expect( copyRandomList(head) ).toEqual(out);
    })

    test('Input: head = [[1,1],[2,1]], Output: [[1,1],[2,1]]', () => {
        let head = ArrayToListNode( [[1,1],[2,1]] );
        let out = ArrayToListNode( [[1,1],[2,1]] );
        expect( copyRandomList(head) ).toEqual(out);
    })

    test('Input: head = [[3,null],[3,0],[3,null]], Output: [[3,null],[3,0],[3,null]]', () => {
        let head = ArrayToListNode( [[3,null],[3,0],[3,null]] );
        let out = ArrayToListNode( [[3,null],[3,0],[3,null]] );
        expect( copyRandomList(head) ).toEqual(out);
    })

});