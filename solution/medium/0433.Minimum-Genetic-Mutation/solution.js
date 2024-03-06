/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
export const minMutation = function(startGene, endGene, bank) {
    let queen = [], visits = new Set();

    queen.push([startGene, 0]);
    while(queen.length) {
        let [gene, output] = queen.shift();

        for( let i = 0; i < 8; i++ ){
            const r = ['A','C','G','T'];
            for( let j = 0; j < r.length; j++ ) {
                const g = r[j];
                let tmp = gene.substring(0, i) + g + gene.substring(i+1);

                if( bank.indexOf(tmp) === -1 ) continue;

                if( tmp === endGene ) {
                    return output + 1;
                }

                if( !visits.has(tmp) ) {
                    queen.push([tmp, output + 1]);
                    visits.add(tmp);
                }
            }
        }
    }

    return -1;
};