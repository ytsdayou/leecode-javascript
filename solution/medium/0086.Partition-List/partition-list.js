import { ListNode } from "../../../structures/ListNode";

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
export const partition = function(head, x) {
    if( head === null ) return head;

    let dumy = new ListNode(-1, head),
        pre = dumy, cur = head,
        gte = new ListNode(-1, null), gteP = gte;

    while( cur ) {
        if( cur.val >= x ) {
            let tmpNext = cur.next;
            cur.next = null;
            gteP.next = cur;

            cur = tmpNext;
            pre.next = cur;
            gteP = gteP.next;
        } else {
            cur = cur.next;
            pre = pre.next;
        }

    }

    pre.next = gte.next;

    return dumy.next;
};