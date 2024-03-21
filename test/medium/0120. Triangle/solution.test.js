import { minimumTotal } from "../../../solution/medium/0120. Triangle/solution";

describe("0120. Triangle", () => {

    test('Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]], Output: 11', () => {
        expect(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])).toEqual(11);
    });

    test('Input: triangle = [[-10]], Output: -10', () => {
        expect(minimumTotal([[-10]])).toEqual(-10);
    });

});