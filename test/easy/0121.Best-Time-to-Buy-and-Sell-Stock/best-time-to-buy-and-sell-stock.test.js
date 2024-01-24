import { 
    maxProfit , maxProfit2
} from "../../../solution/easy/0121.Best-Time-to-Buy-and-Sell-Stock/best-time-to-buy-and-sell-stock";

describe("0189.Rotate-Array", () => {

    test('Input: prices = [7,1,5,3,6,4], Output: 5', () => {
        expect( maxProfit([7,1,5,3,6,4]) ).toEqual( 5 );
    });

    test('Input: prices = [7,6,4,3,1], Output: 0', () => {
        expect( maxProfit([7,6,4,3,1]) ).toEqual( 0 );
    });

    test('Input: prices = [7,1,5,3,6,4], Output: 5', () => {
        expect( maxProfit2([7,1,5,3,6,4]) ).toEqual( 5 );
    });

    test('Input: prices = [7,6,4,3,1], Output: 0', () => {
        expect( maxProfit2([7,6,4,3,1]) ).toEqual( 0 );
    });

});