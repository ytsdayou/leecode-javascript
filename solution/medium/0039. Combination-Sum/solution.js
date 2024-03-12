/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export const combinationSum = function(candidates, target) {
    let ret = new Map();
    backTrack([], 0);
    return ret.size ? Array.from(ret.values()).map(value => value) : [];

    function backTrack(cur, sum) {
        if( sum >= target ) {
            if(sum === target) {
                const r = cur.sort();
                if( !ret.has(r.join("-")) ) {
                    ret.set( r.join("-"), r )
                }
            }
            return;
        }

        for( let i = 0; i < candidates.length; i++ ) {
            let next = [...cur];
            next.push(candidates[i]);
            backTrack(next, sum + candidates[i]);
        }
    }
};

export const combinationSum2 = function(candidates, target) {
    let ret = [];
    dfs([], 0, 0);
    return ret;

    function dfs(cur, sum, i) {
        if( sum === target ) {
            ret.push([...cur]);
            return;
        }
        if( i >= candidates.length || sum > target ) {
            return;
        }

        cur.push(candidates[i]);
        dfs(cur, sum + candidates[i], i);
        cur.pop();
        dfs(cur, sum, i + 1);
    }
}