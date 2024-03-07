/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
export const ladderLength = function(beginWord, endWord, wordList) {
    if( !wordList.includes(endWord) ) {
        return 0;
    }

    let cache = new Map(), queen = [], height = 1, n = endWord.length;
    wordList.push(beginWord);
    for( let i = 0; i < wordList.length; i++ ) {
        const word = wordList[i];
        for(let j = 0; j < n; j++) {
            let pattern = word.substring(0, j) + '*' + word.substring(j+1);
            if( !cache.has(pattern) ) {
                cache.set(pattern, []);
            }
            cache.get(pattern).push(word);
        }
    }

    let visits = new Set();
    queen.push(beginWord);
    while(queen.length) {
        const m = queen.length;

        for( let i = 0; i < m; i++ ) {

            const word = queen.shift();

            if( word === endWord ) {
                return height;
            }

            for(let j = 0; j < n; j++) {
                let pattern = word.substring(0, j) + '*' + word.substring(j+1);
                if( cache.has(pattern) ) {
                    cache.get(pattern).forEach(element => {
                        if( !visits.has(element) ) {
                            queen.push(element);
                            visits.add(element);
                        }
                    });
                }
            }

        }

        height++;
    }

    return 0;
};