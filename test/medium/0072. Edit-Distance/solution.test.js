import { minDistance } from "../../../solution/medium/0072. Edit-Distance/solution";

describe("0072. Edit-Distance", () => {

    test('Input: word1 = "horse", word2 = "ros", Output: 3', () => {
        expect(minDistance("horse", "ros")).toEqual(3);
    });
    
    test('Input: word1 = "intention", word2 = "execution", Output: 5', () => {
        expect(minDistance("intention", "execution")).toEqual(5);
    });

});