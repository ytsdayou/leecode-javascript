/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
export const calcEquation = function(equations, values, queries) {
    let adj = new Map();
    for(let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];

        if( !adj.has(a) ) adj.set(a, []);
        if( !adj.has(b) ) adj.set(b, []);

        adj.get(a).push([b, values[i]]);
        adj.get(b).push([a, 1 / values[i]]);
    }

    return queries.map(q => bfs(q[0], q[1]));

    function bfs(source, target) {
        if( !adj.has(source) || !adj.has(target) ) {
            return -1;
        }

        let visit = new Set(), queen = [];
        queen.push([source, 1]);
        visit.add(source);

        while(queen.length) {
            const [node, weight] = queen.shift();

            if( node === target ) {
                return weight;
            }

            for( let i = 0; i < adj.get(node).length; i++ ) {
                const [nei, w] = adj.get(node)[i];
                if( !visit.has(nei) ) {
                    queen.push([nei, w * weight]);
                    visit.add(nei);
                }
            }
        }

        return -1;
    }
};