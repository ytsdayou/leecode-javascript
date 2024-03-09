export const TrieNode = function() {
    this.children = new Map();
    this.endOfWord = false;
}

TrieNode.prototype.addWord = function(word) {
    let cur = this;
    for(let i = 0; i < word.length; i++) {
        const char = word[i];
        if( !cur.children.has(char) ) {
            cur.children.set(char, new TrieNode());
        }
        cur = cur.children.get(char);
    }
    cur.endOfWord = true;
}