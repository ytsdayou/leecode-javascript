import { ListNode } from "../../../structures/ListNode.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export const mergeTwoLists = function(list1, list2) {
    let dumy = new ListNode(-1, null), p = dumy;

    while(list1 && list2) {
        if( list1 && list2 ) {
            if( list1.val < list2.val ) {
                p.next = list1;
                list1 = list1.next;
            } else {
                p.next = list2;
                list2 = list2.next;
            }
            p = p.next;
        }
    }

    list1 && ( p.next = list1 );
    list2 && ( p.next = list2 );

    return dumy.next;
};