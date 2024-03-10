/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
export const findWords = function(board, words) {
    let wordMap = {}

    function strToMap(node, str, index) {
        if (str.length == index) {
            node.end = true
            return
        }
        if (node[str[index]] == undefined) node[str[index]] = {}
        strToMap(node[str[index]], str, index + 1)
    }

    words.forEach((val) => {
        strToMap(wordMap, val, 0)
    })

    let rows = board.length, cols = board[0].length,
        visits = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0)), 
        resultMap = new Map(), outArray = [];

    for( let i = 0; i < rows; i++ ) {
        for(let j = 0; j < cols; j++) {
            dfs(i, j, wordMap, "");
        }
    }

    return outArray;

    function dfs(r, c, node, word) {
        let char = board[r][c];
        if( !node[char] ) {
            return;
        }

        visits[r][c] = 1

        node = node[char];
        word += char;
        if( node.end ) {
            if (!resultMap.get(word)) outArray.push(word)
            resultMap.set(word, true)
        }

        if( r - 1 >= 0 && visits[r - 1][c] === 0 ) dfs(r - 1, c, node, word);
        if( r + 1 < rows && visits[r + 1][c] === 0 ) dfs(r + 1, c, node, word);
        if( c - 1 >= 0 && visits[r][c - 1] === 0 ) dfs(r, c - 1, node, word);
        if( c + 1 < cols && visits[r][c + 1] === 0 ) dfs(r, c + 1, node, word);

        visits[r][c] = 0
    }
};