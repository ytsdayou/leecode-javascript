import { ListNode } from "../../../structures/ListNode.js";

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
export const reverseBetween = function(head, left, right) {
    if( left === 1 ) {
        return reverseN(head, right);
    }

    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head;
};

let newNode = null;
function reverseN(h, n) {
    if( n === 1 ) {
        newNode = h.next;
        return h;
    }

    let last = reverseN(h.next, n - 1);
    h.next.next = h;
    h.next = newNode;

    return last;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
export const reverseBetween2 = function(head, left, right) {
    let dumy = new ListNode(-1, head);

    let leftPre = dumy, cur = head;
    for( let i = 0; i < left - 1; i++ ) {
        leftPre = cur;
        cur = cur.next;
    }

    let pre = null;
    for( let i = 0; i < right - left + 1; i++ ) {
        let tmpNext = cur.next;
        cur.next = pre;

        pre = cur;
        cur = tmpNext;
    }

    leftPre.next.next = cur;
    leftPre.next = pre;

    return dumy.next;
}