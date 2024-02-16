export const ListNode = function(val, next, random) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.random = (random===undefined ? null : random)
}

export const ArrayToListNode = function(arr) {
    let cache = new Map();

    if( arr instanceof Array ) {
        let dumy = new ListNode(-1),
            p = dumy;

        for( let i = 0; i < arr.length; i++ ) {
            let node = new ListNode(arr[i][0]);

            cache.set(i, node);

            p.next = node;
            p = p.next;
        }

        let pr = dumy;
        for( let i = 0; i < arr.length; i++ ) {
            pr = pr.next;

            pr.random = arr[i][1] !== null ? cache.get(arr[i][1]) : null;
        }

        return dumy.next;
    }

    return null;
}