import { 
    maxProfit 
} from "../../../solution/hard/0123. Best-Time-to-Buy-and-Sell-Stock-III/solution";

describe("0123. Best-Time-to-Buy-and-Sell-Stock-III", () => {

    test('Input: prices = [3,3,5,0,0,3,1,4], Output: 6', () => {
        expect(maxProfit([3,3,5,0,0,3,1,4])).toEqual(6);
    });
    
    test('Input: prices = [1,2,3,4,5], Output: 4', () => {
        expect(maxProfit([1,2,3,4,5])).toEqual(4);
    });

    test('Input: prices = [7,6,4,3,1], Output: 0', () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });

});