import { hIndex } from "../../../solution/medium/0274.H-Index/h-index";

describe("0274.H-Index", () => {

    // test('Input: [0], Output: 0', () => {
    //     expect( hIndex([0]) ).toEqual( 0 );
    // });

    // test('Input: [100], Output: 1', () => {
    //     expect( hIndex([100]) ).toEqual( 1 );
    // });

    // test('Input: [3,0,6,1,5], Output: 3', () => {
    //     expect( hIndex([3,0,6,1,5]) ).toEqual( 3 );//6,5,3,1,0
    // });

    // test('Input: [1,3,1], Output: 1', () => {
    //     expect( hIndex([1,3,1]) ).toEqual( 1 );
    // });

    // test('Input: [0,1], Output: 1', () => {
    //     expect( hIndex([0,1]) ).toEqual( 1 );
    // });

    test('Input: [1,1,3,6,7,10,7,1,8,5,9,1,4,4,3], Output: 6', () => {
        expect( hIndex([1,1,3,6,7,10,7,1,8,5,9,1,4,4,3]) ).toEqual( 6 );
    });
});