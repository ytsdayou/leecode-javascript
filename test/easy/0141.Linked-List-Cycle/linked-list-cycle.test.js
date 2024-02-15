import { hasCycle } from "../../../solution/easy/0141.Linked-List-Cycle/linked-list-cycle";
import { ArrayToListNode } from "../../../structures/ListNode.js";

describe("0002.Add-Two-Numbers", () => {

    test('Input: head = [3,2,0,-4], Output: true', () => {
        const l1 = ArrayToListNode( [3,2,0,-4], 1 );
        expect( hasCycle( l1 ) ).toEqual( true );
    });

    test('Input: head = [1,2], Output: true', () => {
        const l1 = ArrayToListNode( [1,2], 0 );
        expect( hasCycle( l1 ) ).toEqual( true );
    });

    test('Input: head = [1], Output: false', () => {
        const l1 = ArrayToListNode( [1] );
        expect( hasCycle( l1 ) ).toEqual( false );
    });

});