/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const reverseKGroup = function(head, k) {
    if( head === null ) return null;

    let a = head, b = head;
    for( let i = 0; i < k; i++ ) {
        if( b === null ) {
            return a;
        }
        b = b.next;
    }

    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);

    return newHead;
};

// [a, b): b is the beginning node of the next k group
function reverse(a, b) {
    let pre = null, cur = a, tmpNext = null;

    while( cur !== b ) {
        tmpNext = cur.next;
        cur.next = pre;

        pre = cur;
        cur = tmpNext;
    }

    return pre;
}