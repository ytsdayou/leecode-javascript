import { ListNode } from "../../../structures/ListNode";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export const removeNthFromEnd = function(head, n) {
    let dumy = new ListNode(-1, head);
    let fast = dumy, slow = dumy;

    for( let i = 0; i < n; i++ ) {
        fast = fast.next;
    }

    let pre = null;
    while( fast !== null ) {
        pre = slow;
        slow = slow.next;
        fast = fast.next;
    }

    pre.next = slow.next;
    slow.next = null;

    return dumy.next;
};