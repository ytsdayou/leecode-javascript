import { rotateRight } from "../../../solution/medium/0061.Rotate-List/rotate-list";
import { ArrayToListNode } from "../../../structures/ListNode.js";

describe("0061.Rotate-List", () => {

    test('Input: head = [1,2,3,4,5], k = 2, Output: [4,5,1,2,3]', () => {
        let head = ArrayToListNode( [1,2,3,4,5] );
        let out = ArrayToListNode( [4,5,1,2,3] );
        expect( rotateRight(head, 2) ).toEqual(out);
    })

    test('Input: head = [0,1,2], k = 4, Output: [2,0,1]', () => {
        let head = ArrayToListNode( [0,1,2] );
        let out = ArrayToListNode( [2,0,1] );
        expect( rotateRight(head, 4) ).toEqual(out);
    })

});