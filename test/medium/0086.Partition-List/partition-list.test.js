import { 
    partition 
} from "../../../solution/medium/0086.Partition-List/partition-list";
import { ArrayToListNode } from "../../../structures/ListNode.js";

describe("0086.Partition-List", () => {

    test('Input: head = [1,4,3,2,5,2], x = 3, Output: [1,2,2,4,3,5]', () => {
        let head = ArrayToListNode( [1,4,3,2,5,2] );
        let out = ArrayToListNode( [1,2,2,4,3,5] );
        expect( partition(head, 3) ).toEqual(out);
    })

    test('Input: head = [2,1], x = 2, Output: [1,2]', () => {
        let head = ArrayToListNode( [2,1] );
        let out = ArrayToListNode( [1,2] );
        expect( partition(head, 2) ).toEqual(out);
    })

    test('Input: head = [1,4,3,0,5,2], x = 2, Output: [1,0,4,3,5,2]', () => {
        let head = ArrayToListNode( [1,4,3,0,5,2] );
        let out = ArrayToListNode( [1,0,4,3,5,2] );
        expect( partition(head, 2) ).toEqual(out);
    })

});