import { rob } from "../../../solution/medium/0198. House-Robber/solution";

describe("0198. House-Robber", () => {

    test('Input: nums = [1,2,3,1], Output: 4', () => {
        expect(rob([1,2,3,1])).toEqual(4);
    });

    test('Input: nums = [2,7,9,3,1], Output: 12', () => {
        expect(rob([2,7,9,3,1])).toEqual(12);
    });

    test('Input: nums = [2,1,1,2], Output: 4', () => {
        expect(rob([2,1,1,2])).toEqual(4);
    });

});