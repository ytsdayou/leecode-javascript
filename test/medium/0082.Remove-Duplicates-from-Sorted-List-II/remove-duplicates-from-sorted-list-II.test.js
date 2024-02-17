import { ArrayToListNode } from "../../../structures/ListNode.js";
import { 
    deleteDuplicates 
} from "../../../solution/medium/0082.Remove-Duplicates-from-Sorted-List-II/remove-duplicates-from-sorted-list-II.js";

describe("0082.Remove-Duplicates-from-Sorted-List-II", () => {

    test('Input: head = [1,2,3,3,4,4,5], Output: [1,2,5]', () => {
        let head = ArrayToListNode( [1,2,3,3,4,4,5] );
        let out = ArrayToListNode( [1,2,5] );
        expect( deleteDuplicates(head) ).toEqual(out);
    })

    test('Input: head = [1,1,1,2,3], Output: [2,3]', () => {
        let head = ArrayToListNode( [1,1,1,2,3] );
        let out = ArrayToListNode( [2,3] );
        expect( deleteDuplicates(head) ).toEqual(out);
    })

    test('Input: head = [1,1,1,2,2,2,3,3,3], Output: []', () => {
        let head = ArrayToListNode( [1,1,1,2,2,2,3,3,3] );
        let out = ArrayToListNode( [] );
        expect( deleteDuplicates(head) ).toEqual(out);
    })

    test('Input: head = [1,1,1,2,2,2,3], Output: [3]', () => {
        let head = ArrayToListNode( [1,1,1,2,2,2,3] );
        let out = ArrayToListNode( [3] );
        expect( deleteDuplicates(head) ).toEqual(out);
    })

});