export const ListNode = function(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


export const ArrayToListNode = function(arr, pos = -1) {
    let cycle = null;
    if( arr instanceof Array ) {
        let dumy = new ListNode(-1),
            p = dumy;

        for( let i = 0; i < arr.length; i++ ) {
            let node = new ListNode(arr[i]);
            p.next = node;
            p = p.next;

            if( pos === i ) {
                cycle = node;
            }
        }

        p.next = cycle;

        return dumy.next;
    }

    return null;
}