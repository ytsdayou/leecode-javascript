import { Trie } from "../../../solution/medium/0208.Implement-Trie-Prefix-Tree/solution";

describe("0208.Implement-Trie-Prefix-Tree", () => {

    test('Input: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]', () => {
        // [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
        // Output
        // [null, null, true, false, true, null, true]

        let obj = new Trie();
        obj.insert("apple");

        let flag = obj.search("apple");
        expect( flag ).toEqual(true);

        flag = obj.search("app");
        expect( flag ).toEqual(false);

        flag = obj.startsWith("app");
        expect( flag ).toEqual(true);

        flag = obj.startsWith("app");
        expect( flag ).toEqual(true);

        obj.insert("app");

        flag = obj.search("app");
        expect( flag ).toEqual(true);
    });

});