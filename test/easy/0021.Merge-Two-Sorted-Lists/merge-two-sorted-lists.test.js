import { 
    mergeTwoLists 
} from "../../../solution/easy/0021.Merge-Two-Sorted-Lists/merge-two-sorted-lists";
import { ArrayToListNode } from "../../../structures/ListNode.js";

describe("0021.Merge-Two-Sorted-Lists", () => {

    test('Input: list1 = [1,2,4], list2 = [1,3,4], Output: [1,1,2,3,4,4]', () => {
        const l1 = ArrayToListNode( [1, 2, 4] );
        const l2 = ArrayToListNode( [1, 3, 4] );
        const l3 = ArrayToListNode( [1,1,2,3,4,4] );
        expect( mergeTwoLists( l1, l2 ) ).toEqual( l3 );
    });

    test('Input: list1 = [], list2 = [], Output: []', () => {
        const l1 = ArrayToListNode( [] );
        const l2 = ArrayToListNode( [] );
        const l3 = ArrayToListNode( [] );
        expect( mergeTwoLists( l1, l2 ) ).toEqual( l3 );
    });

    test('Input: list1 = [], list2 = [0], Output: [0]', () => {
        const l1 = ArrayToListNode( [] );
        const l2 = ArrayToListNode( [0] );
        const l3 = ArrayToListNode( [0] );
        expect( mergeTwoLists( l1, l2 ) ).toEqual( l3 );
    });

});