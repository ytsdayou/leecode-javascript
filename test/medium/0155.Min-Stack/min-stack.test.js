import { 
    MinStack 
} from "../../../solution/medium/0155.Min-Stack/min-stack";

describe("0020.Valid-Parentheses", () => {

    test('Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]', () => {
   
        var obj = new MinStack();
        obj.push(-2)
        obj.push(0)
        obj.push(-3)

        var param_1 = obj.getMin();
        expect(param_1).toEqual(-3);

        obj.pop()
        
        var param_2 = obj.top();
        expect(param_2).toEqual(0);

        var param_3 = obj.getMin();
        expect(param_3).toEqual(-2);
    })

    

});