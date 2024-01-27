import { 
    RandomizedSet 
} from "../../../solution/medium/380. Insert-Delete-GetRandom-O(1)/insert-delete-getRandom-O(1)";

describe("380. Insert-Delete-GetRandom-O(1)", () => {

    var obj = new RandomizedSet();
    
    test('Inserts 1 to the set. Returns true as 1 was inserted successfully.', () => {
        var param_1 = obj.insert(1);
        expect( param_1 ).toEqual( true );
        expect( obj.arr ).toEqual( [1] );
    });

    test('Returns false as 2 does not exist in the set.', () => {
        var param_2 = obj.remove(2);
        expect( param_2 ).toEqual( false );
    });

    test('Inserts 2 to the set, returns true. Set now contains [1,2].', () => {
        var param_3 = obj.insert(2)
        expect( param_3 ).toEqual( true );
        expect( obj.arr ).toEqual( [1, 2] );
    });
    
    test('getRandom() should return either 1 or 2 randomly.', () => {
        var param_4 = obj.getRandom();
        expect([1, 2]).toContain(param_4);
    });

    test('Removes 1 from the set, returns true. Set now contains [2].', () => {
        var param_5 = obj.remove(1);
        expect( param_5 ).toEqual( true );
        expect( obj.arr ).toEqual( [2] );
    });

    test('2 was already in the set, so return false.', () => {
        var param_6 = obj.insert(2)
        expect( param_6 ).toEqual( false );
    });

    test('Since 2 is the only number in the set, getRandom() will always return 2.', () => {
        for( let i = 0; i < 20; i++ ) {
            var param_7 = obj.getRandom();
            expect( param_7 ).toEqual( 2 );
        }
    });

    // ---------------------------test case 2-----------------------------------------

    var obj2 = new RandomizedSet();
    test('Inserts 3 to the set. Returns true as 3 was inserted successfully.', () => {
        var param_1 = obj2.insert(3);
        expect( param_1 ).toEqual( true );
        expect( obj2.arr ).toEqual( [3] );
    });

    test('Removes 3 from the set, returns true. Set now contains [].', () => {
        var param_2 = obj2.remove(3);
        expect( param_2 ).toEqual( true );
        expect( obj2.arr ).toEqual( [] );
    });

    test('Removes 0 from the set, returns false.', () => {
        var param_3 = obj2.remove(0);
        expect( param_3 ).toEqual( false );
    });

});