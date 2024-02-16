import { ListNode } from "../../../structures/ListNodeRandom.js";

/**
 * @param {Node} head
 * @return {Node}
 */
export const copyRandomList = function(head) {
    let dumy = new ListNode(-1), p = dumy, cache = new Map();

    let cur = head;
    while(cur) {
        let copy = new ListNode(cur.val, null, null);
        cache.set(cur, copy);
        cur = cur.next;
    }

    cur = head;
    while(cur) {
        let copy = cache.get(cur);
        copy.next = cur.next === null ? null : cache.get(cur.next);
        copy.random = cur.random === null ? null : cache.get(cur.random);

        cur = cur.next;
    }

    return cache.has(head) ? cache.get(head) : null;
};

