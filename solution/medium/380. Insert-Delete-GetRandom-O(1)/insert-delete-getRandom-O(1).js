
export const RandomizedSet = function() {
    this.arr = [];
    this.mp = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if( ! this.mp.has(val) ) {
        this.arr.push(val);
        this.mp.set(val, this.arr.length - 1);
        return true;
    }

    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if( this.mp.has(val) ) {
        const deleteIndex = this.mp.get(val);
        this.mp.set(this.arr[this.arr.length - 1], deleteIndex);
        this.mp.delete(val);

        this.arr[deleteIndex] = this.arr[this.arr.length - 1];
        this.arr.pop();
        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor( Math.random() * this.arr.length )];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */