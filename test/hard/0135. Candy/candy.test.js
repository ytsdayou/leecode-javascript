import { candy } from "../../../solution/hard/0135. Candy/candy";

describe("0135. Candy", () => {

    test('Input: ratings = [1,0,2], Output: 5', () => {
        expect(candy([1,0,2])).toEqual(5);
    });

    test('Input: ratings = [1,2,2], Output: 4', () => {
        expect(candy([1,2,2])).toEqual(4);
    });

    test('Input: ratings = [1,3,2,2,1], Output: 7', () => {
        expect(candy([1,3,2,2,1])).toEqual(7);
    });

});