import { calcEquation } from "../../../solution/medium/0399.Evaluate-Division/solution";

describe("0399.Evaluate-Division", () => {

    test('Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], ' +
            'queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]], ' +
            'Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]', () => {
        const equations = [["a","b"],["b","c"]];
        const values = [2.0,3.0];
        const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
        expect( calcEquation(equations, values, queries) ).toEqual([6.00000,0.50000,-1.00000,1.00000,-1.00000]);
    });

    test('Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], ' +
            'queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]], ' +
            'Output: [3.75000,0.40000,5.00000,0.20000]', () => {
        const equations = [["a","b"],["b","c"],["bc","cd"]];
        const values = [1.5,2.5,5.0];
        const queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
        expect( calcEquation(equations, values, queries) ).toEqual([3.75000,0.40000,5.00000,0.20000]);
    });

    test('Input: equations = [["a","b"]], values = [0.5], ' +
            'queries = [["a","b"],["b","a"],["a","c"],["x","y"]], ' +
            'Output: [0.50000,2.00000,-1.00000,-1.00000]', () => {
        const equations = [["a","b"]];
        const values = [0.5];
        const queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
        expect( calcEquation(equations, values, queries) ).toEqual([0.50000,2.00000,-1.00000,-1.00000]);
    });

});