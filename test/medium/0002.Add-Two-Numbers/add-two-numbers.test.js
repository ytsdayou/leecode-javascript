import { addTwoNumbers } from "../../../solution/medium/0002.Add-Two-Numbers/add-two-numbers";
import { ArrayToListNode } from "../../../structures/ListNode";

describe("0002.Add-Two-Numbers", () => {

    test('Input: l1 = [2,4,3], l2 = [5,6,4], Output should be [7,0,8]', () => {
        const l1 = ArrayToListNode( [2,4,3] ),
              l2 = ArrayToListNode( [5,6,4] );
        const result = ArrayToListNode( [7,0,8] );
        console.log(addTwoNumbers( l1, l2 ), ArrayToListNode( [7,0,8] ))
        expect( addTwoNumbers( l1, l2 ) ).toBeEqualListNode( result );
    });

    test('Input: l1 = [0], l2 = [0], Output should be [0]', () => {
        const l1 = ArrayToListNode( [0] ),
              l2 = ArrayToListNode( [0] );
        const result = ArrayToListNode( [0] );
        expect( addTwoNumbers( l1, l2 ) ).toBeEqualListNode( result );
    });

    test('Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9], Output should be [8,9,9,9,0,0,0,1]', () => {
        const l1 = ArrayToListNode( [9,9,9,9,9,9,9] ),
              l2 = ArrayToListNode( [9,9,9,9] );
        const result = ArrayToListNode( [8,9,9,9,0,0,0,1] );
        expect( addTwoNumbers( l1, l2 ) ).toBeEqualListNode( result );
    });

});