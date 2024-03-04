/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export const canFinish = function(numCourses, prerequisites) {
    let preMap = new Map();
    for( let course = 0; course < numCourses; course++ ) {
        preMap.set(course, []);
    }

    prerequisites.forEach(p => {
        const [course, pre] = p;
        preMap.get(course).push(pre);
    })

    let visits = new Set();
    function dfs(course) {
        if( visits.has(course) ) {
            return false;
        }

        const pres = preMap.get(course);
        if( pres.length === 0 ) {
            return true;
        }

        visits.add(course);
        for( let i = 0; i < pres.length; i++ ) {
            if( !dfs(pres[i]) ) {
                return false;
            }
        }

        visits.delete(course);
        preMap.set(course, []);

        return true;
    }

    for( let course = 0; course < numCourses; course++ ) {
        if( !dfs(course) ) {
            return false;
        }
    }

    return true;
};