import { 
    containsNearbyDuplicate 
} from "../../../solution/easy/0219.Contains-Duplicate-II/contains-duplicate-II";

describe("0219.Contains-Duplicate-II", () => {

    test('Input: nums = [1,2,3,1], k = 3, Output:  true', () => {
        expect( containsNearbyDuplicate([1,2,3,1], 3) ).toEqual( true );
    })

    test('Input: nums = [1,0,1,1], k = 1, Output:  true', () => {
        expect( containsNearbyDuplicate([1,0,1,1], 1) ).toEqual( true );
    })

    test('Input: nums = [1,2,3,1,2,3], k = 2, Output:  false', () => {
        expect( containsNearbyDuplicate([1,2,3,1,2,3], 2) ).toEqual( false );
    })

});