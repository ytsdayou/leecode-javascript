import { sortList } from "../../../solution/medium/0148. Sort-List/solution";
import { ArrayToListNode } from "../../../structures/ListNode.js";

describe("0148. Sort-List", () => {

    test('Input: head = [4,2,1,3], Output: [1,2,3,4]', () => {
        let list = ArrayToListNode( [4,2,1,3] ),
            output = ArrayToListNode( [1,2,3,4] );
        expect( sortList(list) ).toEqual(output)
    });

    test('Input: head = [-1,5,3,4,0], Output: [-1,0,3,4,5]', () => {
        let list = ArrayToListNode( [-1,5,3,4,0] ),
            output = ArrayToListNode( [-1,0,3,4,5] );
        expect( sortList(list) ).toEqual(output)
    });

});
