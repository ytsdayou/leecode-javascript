import { 
    maxProfit 
} from "../../../solution/medium/0122.Best-Time-to-Buy-and-Sell-Stock-II/best-time-to-buy-and-sell-stock-II";

describe("0122.Best-Time-to-Buy-and-Sell-Stock-II", () => {

    test('Input: prices = [7,1,5,3,6,4], Output: 7', () => {
        expect( maxProfit([7,1,5,3,6,4]) ).toEqual( 7 );
    });

    test('Input: prices = [1,2,3,4,5], Output: 4', () => {
        expect( maxProfit([1,2,3,4,5]) ).toEqual( 4 );
    });

    test('Input: prices = [7,6,4,3,1], Output: 0', () => {
        expect( maxProfit([7,6,4,3,1]) ).toEqual( 0 );
    });

});