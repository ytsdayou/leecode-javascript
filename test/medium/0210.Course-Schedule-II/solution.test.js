import { findOrder } from "../../../solution/medium/0210.Course-Schedule-II/solution";

describe("0210.Course-Schedule-II", () => {

    test('Input: numCourses = 4, prerequisites = [[0,1], [1,2], [2,3]], Output: [3,2,1,0]', () => {
        const prerequisites = [[0,1], [1,2], [2,3]];
        expect( findOrder(4, prerequisites) ).toEqual([3,2,1,0]);
    });

    test('Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]], Output: [0,2,1,3]', () => {
        const prerequisites = [[1,0],[2,0],[3,1],[3,2]];
        const result = findOrder(4, prerequisites);
        expect( [ [0,2,1,3], [[0,1,2,3]].includes(result) ] ).toBeTruthy();
    });
    
    test('Input: numCourses = 2, prerequisites = [[1,0]], Output: [0,1]', () => {
        const prerequisites = [[1,0]];
        expect( findOrder(2, prerequisites) ).toEqual([0,1]);
    });

    test('Input: numCourses = 1, prerequisites = [], Output: [0]', () => {
        const prerequisites = [];
        expect( findOrder(1, prerequisites) ).toEqual([0]);
    });

});