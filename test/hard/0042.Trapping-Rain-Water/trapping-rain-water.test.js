import { 
    trap , trap2
} from "../../../solution/hard/0042.Trapping-Rain-Water/trapping-rain-water";

describe("0042.Trapping-Rain-Water", () => {

    test('Input: [0,1,0,2,1,0,1,3,2,1,2,1], Output: 6', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
    });

    test('Input: [4,2,0,3,2,5], Output: 9', () => {
        expect(trap([4,2,0,3,2,5])).toEqual(9);
    });

    test('Input: [0,1,0,2,1,0,1,3,2,1,2,1], Output: 6', () => {
        expect(trap2([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
    });

    test('Input: [4,2,0,3,2,5], Output: 9', () => {
        expect(trap2([4,2,0,3,2,5])).toEqual(9);
    });

    test('Input: [5,5,1,7,1,1,5,2,7,6], Output: 23', () => {
        expect(trap2([5,5,1,7,1,1,5,2,7,6])).toEqual(23);
    });

});