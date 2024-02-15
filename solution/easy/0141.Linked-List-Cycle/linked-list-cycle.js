import { ListNode } from "../../../structures/ListNode.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = function(head) {
    let dumy = new ListNode(-1, head), l1 = dumy, l2 = dumy;

    while( l1.next && l2.next && l2.next.next ) {
        l1 = l1.next;
        l2 = l2.next.next;
        
        if( l2 === l1 ) {
            return true;
        }
    }

    return false;
};