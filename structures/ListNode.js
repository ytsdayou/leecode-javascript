export const ListNode = function(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export const ArrayToListNode = function(arr) {
    if( arr instanceof Array ) {
        let dumy = new ListNode(-1),
            p = dumy;

        for( let i = 0; i < arr.length; i++ ) {
            p.next = new ListNode(arr[i]);
            p = p.next;
        }

        return dumy.next;
    }

    return null;
}

export const isEqualListNode = function(node1, node2) {
    while (node1 !== null && node2 !== null) {
      if (node1.val !== node2.val) {
        return false;
      }
      node1 = node1.next;
      node2 = node2.next;
    }
    // Check if both nodes reach the end at the same time
    return node1 === null && node2 === null;
  }