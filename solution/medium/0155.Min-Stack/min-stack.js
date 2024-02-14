/**
 * We can solve this problem by using two stacks.
 * One store the values, and the other one store the minimum value of each node.
 */
export const MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    const n = this.min.length;
    this.min.push( n > 0 ? Math.min(this.min[n-1], val) : val );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const n = this.stack.length;
    return n > 0 ? this.stack[n - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const n = this.min.length;
    return n > 0 ? this.min[n - 1] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */