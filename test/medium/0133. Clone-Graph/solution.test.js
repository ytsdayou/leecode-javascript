import { cloneGraph } from "../../../solution/medium/0133. Clone-Graph/solution";
import { ArrayToGraph } from "../../../structures/GraphNode";

describe("0133. Clone-Graph", () => {

    test('Input: adjList = [[2,4],[1,3],[2,4],[1,3]], Output: [[2,4],[1,3],[2,4],[1,3]]', () => {
        const node = ArrayToGraph([[2,4],[1,3],[2,4],[1,3]]);
        const node2 = ArrayToGraph([[2,4],[1,3],[2,4],[1,3]]);
        expect( cloneGraph(node) ).toEqual(node2);
    });

    test('Input: adjList = [[]], Output: [[]]', () => {
        const node = ArrayToGraph([[]]);
        const node2 = ArrayToGraph([[]]);
        expect( cloneGraph(node) ).toEqual(node2);
    });

    test('Input: adjList = [], Output: []', () => {
        const node = ArrayToGraph([]);
        const node2 = ArrayToGraph([]);
        expect( cloneGraph(node) ).toEqual(node2);
    });

});