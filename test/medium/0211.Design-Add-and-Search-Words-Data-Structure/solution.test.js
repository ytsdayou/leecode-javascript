import { 
    WordDictionary 
} from "../../../solution/medium/0211.Design-Add-and-Search-Words-Data-Structure/solution";

describe("0211.Design-Add-and-Search-Words-Data-Structure", () => {

    test('Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]', () => {
        // [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
        // Output
        // [null,null,null,null,false,true,true,true]

        let obj = new WordDictionary();
        obj.addWord("bad");
        obj.addWord("dad");
        obj.addWord("mad");

        let flag = obj.search("pad");
        expect( flag ).toEqual(false);

        flag = obj.search("bad");
        expect( flag ).toEqual(true);

        flag = obj.search(".ad");
        expect( flag ).toEqual(true);

        flag = obj.search("b..");
        expect( flag ).toEqual(true);
    });

});