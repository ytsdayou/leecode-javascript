export const Node = function(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

export const ArrayToGraph = function(arr) {
    if( !arr.length ) {
        return null;
    }

    let cache = new Map();
    for( let i = 0; i < arr.length; i++ ) {
        cache.set(i+1, new Node(i+1));
    }

    for( let i = 0; i < arr.length; i++ ) {
        let neighbors = [];
        arr[i].forEach(k => {
            neighbors.push(cache.get(k));
        });
        const node = cache.get(i+1);
        node.neighbors = neighbors;
    }

    return cache.get(1);
}