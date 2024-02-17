import { ArrayToListNode } from "../../../structures/ListNode.js";
import { 
    removeNthFromEnd 
} from "../../../solution/medium/0019.Remove-Nth-Node-From-End-of-List/remove-nth-node-from-end-of-list.js";

describe("0019.Remove-Nth-Node-From-End-of-List", () => {

    test('Input: head = [1,2,3,4,5], n = 2, Output: [1,2,3,5]', () => {
        let head = ArrayToListNode( [1,2,3,4,5] );
        let out = ArrayToListNode( [1,2,3,5] );
        expect( removeNthFromEnd(head, 2) ).toEqual(out);
    })

    test('Input: head = [1], n = 1', () => {
        let head = ArrayToListNode( [1] );
        let out = ArrayToListNode( [] );
        expect( removeNthFromEnd(head, 1) ).toEqual(out);
    })

});