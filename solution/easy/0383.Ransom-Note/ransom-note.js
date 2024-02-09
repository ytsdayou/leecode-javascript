/**
 * using hashmap to store the apearance of letters in magezine
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = function(ransomNote, magazine) {
    let total = new Map();

    for( let i = 0; i < magazine.length; i++ ) {
        const l = magazine[i];
        total.set(l, ( total.get(l) || 0 ) + 1);
    }

    for( let i = 0; i < ransomNote.length; i++ ) {
        const l = ransomNote[i];

        if( total.has(l) && total.get(l) >= 1 ) {
            total.set(l, total.get(l) - 1);
        } else {
            return false;
        }
    }

    return true;
};