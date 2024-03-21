import { coinChange } from "../../../solution/medium/0322. Coin-Change/solution";

describe("0322. Coin-Change", () => {

    test('Input: coins = [1,2,5], amount = 11, Output: 3', () => {
        expect(coinChange([1,2,5], 11)).toEqual(3);
    });

    test('Input: coins = [2], amount = 3, Output: -1', () => {
        expect(coinChange([2], 3)).toEqual(-1);
    });

    test('Input: coins = [1], amount = 0, Output: 0', () => {
        expect(coinChange([1], 0)).toEqual(0);
    });

});