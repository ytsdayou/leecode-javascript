import { 
    canCompleteCircuit 
} from "../../../solution/medium/0134.Gas-Station/gas-station";

describe("0134.Gas-Station", () => {

    test('Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2], Output: 3', () => {
        expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).toEqual(3);
    });

    test('Input: gas = [2,3,4], cost = [3,4,3], Output: -1', () => {
        expect(canCompleteCircuit([2,3,4], [3,4,3])).toEqual(-1);
    });

});