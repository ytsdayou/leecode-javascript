/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
export const findOrder = function(numCourses, prerequisites) {
    let preMap = new Map();
    for( let course = 0; course < numCourses; course++ ) {
        preMap.set(course, []);
    }

    prerequisites.forEach(p => {
        const [course, pre] = p;
        preMap.get(course).push(pre);
    })

    let visits = new Set(), cycle = new Set(), path = [];
    function dfs(course) {
        if( cycle.has(course) ) {
            return false;
        }
        if( visits.has(course) ) {
            return true;
        }

        cycle.add(course);
        const pres = preMap.get(course);

        for( let i = 0; i < pres.length; i++ ) {
            if( !dfs(pres[i]) ) {
                return false;
            }
        }

        visits.add(course);
        path.push(course);
        cycle.delete(course);

        return true;
    }

    for( let i = 0; i < numCourses; i++ ) {
        if( !dfs(i) ) {
            return [];
        }
    }

    return path;
};