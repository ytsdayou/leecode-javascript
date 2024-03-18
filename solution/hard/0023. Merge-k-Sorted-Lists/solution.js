import { ListNode } from "../../../structures/ListNode";

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = function(lists) {
    const n = lists.length;
    if( !n ) return null;
    if( n === 1 ) return lists[0];

    if( n === 2 ) return mergeTwo(lists[0], lists[1]);

    const mid = Math.floor( n / 2 );
    const list1 = lists.slice(0, mid);
    const list2 = lists.slice(mid);

    return mergeTwo(mergeKLists(list1), mergeKLists(list2));
};

function mergeTwo(list1, list2) {
    let dumy = new ListNode(-1),
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