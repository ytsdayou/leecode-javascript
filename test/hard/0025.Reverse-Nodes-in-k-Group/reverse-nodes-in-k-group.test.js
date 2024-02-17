import { 
    reverseKGroup 
} from "../../../solution/hard/0025.Reverse-Nodes-in-k-Group/reverse-nodes-in-k-group";
import { ArrayToListNode } from "../../../structures/ListNode.js";

describe("0025.Reverse-Nodes-in-k-Group", () => {

    test('Input: head = [1,2,3,4,5], k = 2, Output: [2,1,4,3,5]', () => {
        let head = ArrayToListNode( [1,2,3,4,5] );
        let out = ArrayToListNode( [2,1,4,3,5] );
        expect( reverseKGroup(head, 2) ).toEqual(out);
    })

    test('Input: head = [1,2,3,4,5], k = 3, Output: [3,2,1,4,5]', () => {
        let head = ArrayToListNode( [1,2,3,4,5] );
        let out = ArrayToListNode( [3,2,1,4,5] );
        expect( reverseKGroup(head, 3) ).toEqual(out);
    })

});