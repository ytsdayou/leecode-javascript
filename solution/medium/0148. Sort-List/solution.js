import { ListNode } from "../../../structures/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const sortList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    let preSlow = null,
        slow = head,
        fast = head;

    while(fast && fast.next) {
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    preSlow.next = null;

    return merge(sortList(head), sortList(slow));

    function merge(list1, list2) {
        let dumy = new ListNode(-1, null),
            p = dumy;

        while(list1 && list2) {
            if( list1.val < list2.val ) {
                p.next = list1;
                list1 = list1.next;
            } else {
                p.next = list2;
                list2 = list2.next;
            }

            p = p.next;
        }

        list1 && ( p.next = list1 );
        list2 && ( p.next = list2 );

        return dumy.next;
    }
};