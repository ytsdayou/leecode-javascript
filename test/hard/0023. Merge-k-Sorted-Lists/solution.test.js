import { mergeKLists } from "../../../solution/hard/0023. Merge-k-Sorted-Lists/solution";
import { ArrayToListNode } from "../../../structures/ListNode";

describe("0023. Merge-k-Sorted-Lists", () => {

    test('Input: lists = [[1,4,5],[1,3,4],[2,6]], Output: [1,1,2,3,4,4,5,6]', () => {
        let Input = [ArrayToListNode([1,4,5]), ArrayToListNode([1,3,4]), ArrayToListNode([2,6])],
            ret = mergeKLists(Input);
        expect( ret ).toEqual(ArrayToListNode([1,1,2,3,4,4,5,6]));
    });

    test('Input: lists = [], Output: []', () => {
        let Input = []
        expect( mergeKLists(Input) ).toEqual(ArrayToListNode([]));
    });

    test('Input: lists = [[]], Output: []', () => {
        let Input = [ArrayToListNode([])]
        expect( mergeKLists(Input) ).toEqual(ArrayToListNode([]));
    });

});