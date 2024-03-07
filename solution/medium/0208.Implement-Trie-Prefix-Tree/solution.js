const TrieNode = function() {
    this.children = new Map();
    this.endOfWord = false;
}

export const Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
Trie.prototype.search = function(word) {
    let cur = this.root;
    for(let i = 0; i < word.length; i++) {
        const char = word[i];
        if( !cur.children.has(char) ) {
            return false;
        }
        cur = cur.children.get(char);
    }

    return cur.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root;
    for(let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if( !cur.children.has(char) ) {
            return false;
        }
        cur = cur.children.get(char);
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */