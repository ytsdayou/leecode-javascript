import { MinHeap } from "../../../structures/MinHeap";

/**
 * quick select
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findKthLargest = function(nums, k) {
    let heap = new MinHeap();
    for (let i = 0; i < k; i++) {
        heap.insert(nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap.getMin().val) {
            heap.pop();
            heap.insert(nums[i]);
        }
    }
    return heap.getMin().val;
};

