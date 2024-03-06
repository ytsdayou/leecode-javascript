import { minMutation } from "../../../solution/medium/0433.Minimum-Genetic-Mutation/solution";

describe("0433.Minimum-Genetic-Mutation", () => {

    test('Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"], Output: 1', () => {
        expect( minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]) ).toEqual(1);
    });

    test('Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"], Output: 2', () => {
        expect( minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]) ).toEqual(2);
    });

    test('Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = [], Output: -1', () => {
        expect( minMutation("AACCGGTT", "AACCGGTA", []) ).toEqual(-1);
    });

});