import { LRUCache } from "../../../solution/medium/0146.LRU-Cache/lru-cache";

describe("0146.LRU-Cache", () => {

    test('["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]', () => {
        // [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
        // Output [null, null, null, 1, null, -1, null, -1, 3, 4]
        let lru = new LRUCache(2);
        lru.put(1, 1);
        lru.put(2, 2);
        
        let v = lru.get(1);
        expect( v ).toEqual(1);

        lru.put(3, 3);
        v = lru.get(2);
        expect( v ).toEqual( -1 );

        lru.put(4, 4);
        v = lru.get(1);
        expect( v ).toEqual( -1 );
        
        v = lru.get(3);
        expect( v ).toEqual( 3 );

        v = lru.get(4);
        expect( v ).toEqual( 4 );
    })

    test('["LRUCache","put","get","put","get","get"]', () => {
        // [[1],[2,1],[2],[3,2],[2],[3]]
        let lru = new LRUCache(1);
        lru.put(2, 1);

        let v = lru.get(2);
        expect(v).toEqual(1);

        lru.put(3, 2);
        v = lru.get(2);
        expect(v).toEqual(-1);
        v = lru.get(3);
        expect(v).toEqual(2);
    });

    test('["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]', () => {
        // [[3],[1,1],[2,2],[3,3],[4,4],[4],[3],[2],[1],[5,5],[1],[2],[3],[4],[5]]
        // [null,null,null,null,null,4,3,2,-1,null,-1,2,3,-1,5]
        let lru = new LRUCache(3);
        lru.put(1, 1);
        lru.put(2, 2);
        lru.put(3, 3);
        lru.put(4, 4);

        let v = lru.get(4);
        expect(v).toEqual(4);
        v = lru.get(3);
        expect(v).toEqual(3);
        v = lru.get(2);
        expect(v).toEqual(2);
        v = lru.get(1);
        expect(v).toEqual(-1);

        lru.put(5, 5);
        v = lru.get(1);
        expect(v).toEqual(-1);
        v = lru.get(2);
        expect(v).toEqual(2);
        v = lru.get(3);
        expect(v).toEqual(3);
        v = lru.get(4);
        expect(v).toEqual(-1);
        v = lru.get(5);
        expect(v).toEqual(5);
    });
});