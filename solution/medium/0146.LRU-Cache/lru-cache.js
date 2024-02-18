/**
 * @param {number} capacity
 */
export const LRUCache = function(capacity) {
    this.cap = capacity;
    this.cache = new Map();

    this.left = new DoubleLinkList(-1, -1);
    this.right = new DoubleLinkList(-1, -1);
    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if( this.cache.has(key) ) {
        const node = this.cache.get(key);
        // remove node then insert into the right of the link list
        this.remove(node);
        this.insert(key, node.val);

        return node.val;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if( this.cache.has(key) ) {
        this.remove(this.cache.get(key));
    }

    this.insert(key, value);

    if( this.cache.size > this.cap ) {
        let lru = this.left.next;
        let next = lru.next;
        this.left.next = next;
        next.prev = this.left;
        
        this.cache.delete(lru.key);
        lru.prev = null;
        lru.next = null;
    }
};

LRUCache.prototype.remove = function(node) {
    let prev = node.prev, next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
}

LRUCache.prototype.insert = function(key, value) {
    let node = new DoubleLinkList(key, value);

    let prev = this.right.prev;
    prev.next = node;
    node.next = this.right;
    node.prev = prev;
    this.right.prev = node;

    this.cache.set(key, node);
}

class DoubleLinkList {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = this.next = null;
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */