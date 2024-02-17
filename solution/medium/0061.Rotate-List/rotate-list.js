/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const rotateRight = function(head, k) {
    if( !head ) return head;

    // get the length of list
    let length = 1, tail = head;
    while( tail.next ) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if( k === 0 ) return head;

    // move to the node which is before the new head, and rotate
    let cur = head;
    for( let i = 0; i < length - k - 1; i++ ) {
        cur = cur.next;
    }

    let newHead = cur.next;
    cur.next = null;
    tail.next = head;

    return newHead;
};