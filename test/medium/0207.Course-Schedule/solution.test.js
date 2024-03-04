import { canFinish } from "../../../solution/medium/0207.Course-Schedule/solution";

describe("0207.Course-Schedule", () => {

    test('Input: numCourses = 2, prerequisites = [[1,0]], Output: true', () => {
        const prerequisites = [[1,0]];
        expect( canFinish(2, prerequisites) ).toEqual(true);
    });

    test('Input: numCourses = 2, prerequisites = [[1,0],[0,1]], Output: false', () => {
        const prerequisites = [[1,0],[0,1]];
        expect( canFinish(2, prerequisites) ).toEqual(false);
    });

});