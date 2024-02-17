import { ListNode } from "../../../structures/ListNode";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = function(head) {
    let dumy = new ListNode(null, head);
    let pre = dumy, cur = dumy.next;

    while( cur !== null ) {
        let set = new Set();
        if( cur.next && cur.next.val === cur.val ) {
            set.add( cur.next.val );
        }

        while( cur !== null && set.has( cur.val ) ) {
            if( cur.next && cur.next.next && cur.next.next.val === cur.next.val ) {
                set.add( cur.next.val );
            }

            cur = cur.next;
        }

        pre.next = cur;
        pre = cur;
        if( cur ) {
            cur = cur.next;
        }
    }

    return dumy.next;
}