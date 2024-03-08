const TrieNode = function() {
    this.children = new Map();
    this.endOfWord = false;
}

export const WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this.root;
    for(let i = 0; i < word.length; i++) {
        const char = word[i];
        if( !cur.children.has(char) ) {
            cur.children.set(char, new TrieNode());
        }
        cur = cur.children.get(char);
    }
    cur.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return dfs(0, this.root);

    function dfs(i, root) {
        let cur = root;

        for(let j = i; j < word.length; j++) {
            const char = word[j];

            if( char === "." ){
                for( let [c, node] of cur.children ) {
                    if( dfs(j + 1, node) ) {
                        return true;
                    }
                }
                return false;
            } else {
                if( !cur.children.has(char)  ) {
                    return false;
                }
                cur = cur.children.get(char);
            }
        }

        return cur.endOfWord;
    }
};