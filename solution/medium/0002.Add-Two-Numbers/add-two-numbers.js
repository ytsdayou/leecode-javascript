import { ListNode } from "../../../structures/ListNode";

/**
 * The task involves adding two reverse linked lists node by node, similar to 
 * adding two numbers from the least significant digit to the most significant 
 * digit. When the sum of two digits is greater than 10, the resulting value 
 * needs to be carried over to the next node, and this value should be stored 
 * in a variable called "carry". To solve this problem, you need to iterate 
 * through both linked lists until they are both null and the variable "carry" 
 * equals 0.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = function(l1, l2) {
    let carry = 0,
        dumy = new ListNode(-1),
        p = dumy;

    while( l1 || l2 || carry ) {
        p.next = new ListNode(-1);
        p = p.next;

        let total = ( l1 ? l1.val : 0 ) + ( l2 ? l2.val : 0 ) + carry;
        carry = Math.floor(total / 10);
        p.val = total % 10;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dumy.next;
};