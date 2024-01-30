/**
 * We should pack words in a greedy approach; that is, fit as many words as 
 * possible on each line and then fill the remaining space accordingly.
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
export const fullJustify = function(words, maxWidth) {
    let res = [], line = [], lineLen = 0;

    for( let i = 0; i < words.length; i++ ) {
        // break line
        if( lineLen + line.length + words[i].length > maxWidth ) {
            let totalSpaces = maxWidth - lineLen;
            let spaceCount = Math.max( 1, line.length - 1 );
            let eachSpaces = Math.floor( ( maxWidth - lineLen ) / spaceCount );
            
            let remains = maxWidth - eachSpaces * spaceCount - lineLen;

            for( let j = 0; j <= line.length - 1; j++ ) {
                if( totalSpaces ) {
                    line[j] += new Array(eachSpaces).fill(" ").join("");
                    totalSpaces -= eachSpaces;
                }

                if( remains ) {
                    line[j] += " ";
                    remains--;
                    totalSpaces--;
                }
            }

            res.push( line.join("") );

            //reset line
            line = [];
            lineLen = 0;
        }

        line.push( words[i] );
        lineLen += words[i].length;
    }

    //last line
    let lastLine = line.join(" ");
    let remains = maxWidth - lastLine.length;
    res.push( lastLine + new Array(remains).fill(" ").join("") );

    return res;
};