import { TrieNode } from "../../../structures/TrieNode";

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
export const findWords = function(board, words) {
    let root = new TrieNode();
    for(let i = 0; i < words.length; i++) {
        root.addWord(words[i]);
    }

    let rows = board.length, cols = board[0].length,
        visits = new Set(), ret = new Set();

    for( let i = 0; i < rows; i++ ) {
        for(let j = 0; j < cols; j++) {
            dfs(i, j, root, "");
        }
    }

    return Array.from(ret);

    function dfs(r, c, node, word) {
        if( r === rows || c === cols || r < 0 || c < 0
            || visits.has(getKey(r, c))  
            || !node.children.has(board[r][c])
        ) {
            return;
        }

        visits.add(getKey(r, c));

        node = node.children.get(board[r][c]);
        word += board[r][c];
        if( node.endOfWord ) {
            ret.add(word);
        }

        dfs(r + 1, c, node, word);
        dfs(r - 1, c, node, word);
        dfs(r, c + 1, node, word);
        dfs(r, c - 1, node, word);

        visits.delete(getKey(r, c));
    }

    function getKey(r, c) {
        return [r,c].join("|");
    }
};