import { ArrayToListNode } from "../../../structures/ListNode.js";
import { 
    reverseBetween , reverseBetween2
} from "../../../solution/medium/0092.Reverse-Linked-List-II/reverse-linked-list-II.js";

describe("0138.Copy-List-With-Random-Pointer", () => {

    test('Input: head = [1,2,3,4,5], left = 2, right = 4, Output: [1,4,3,2,5]', () => {
        let head = ArrayToListNode( [1,2,3,4,5] );
        let out = ArrayToListNode( [1,4,3,2,5] );
        expect( reverseBetween(head, 2, 4) ).toEqual(out);
    })

    test('Input: head = [5], left = 1, right = 1, Output: [5]', () => {
        let head = ArrayToListNode( [5] );
        let out = ArrayToListNode( [5] );
        expect( reverseBetween(head, 1, 1) ).toEqual(out);
    })

    test('Input: head = [1,2,3,4,5], left = 2, right = 4, Output: [1,4,3,2,5]', () => {
        let head = ArrayToListNode( [1,2,3,4,5] );
        let out = ArrayToListNode( [1,4,3,2,5] );
        expect( reverseBetween2(head, 2, 4) ).toEqual(out);
    })

    test('Input: head = [5], left = 1, right = 1, Output: [5]', () => {
        let head = ArrayToListNode( [5] );
        let out = ArrayToListNode( [5] );
        expect( reverseBetween2(head, 1, 1) ).toEqual(out);
    })

});