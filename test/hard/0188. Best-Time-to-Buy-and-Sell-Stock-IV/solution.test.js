import { 
    maxProfit 
} from "../../../solution/hard/0188. Best-Time-to-Buy-and-Sell-Stock-IV/solution";

describe("0188. Best-Time-to-Buy-and-Sell-Stock-IV", () => {

    test('Input: k = 2, prices = [2,4,1], Output: 2', () => {
        expect(maxProfit(2, [2,4,1])).toEqual(2);
    });
    
    test('Input: k = 2, prices = [3,2,6,5,0,3], Output: 7', () => {
        expect(maxProfit(2, [3,2,6,5,0,3])).toEqual(7);
    });

});