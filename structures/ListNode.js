export const ListNode = function(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export const ArrayToListNode = function(arr) {
    if( arr instanceof Array ) {
        let dumy = new ListNode(-1),
            p = dumy;

        for( let i = 0; i < arr.length; i++ ) {
            p.next = new ListNode(arr[i]);
            p = p.next;
        }

        return dumy.next;
    }

    return null;
}