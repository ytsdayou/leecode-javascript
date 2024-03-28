import { MinHeap } from "../../../structures/MinHeap.js";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
export const kSmallestPairs = function(nums1, nums2, k) {
    const res = [];
    const pq = new MinHeap();

    for (let i = 0; i < Math.min(k, nums1.length); i++) {
        pq.insert({
            val: nums1[i] + nums2[0],
            index: [i, 0]
        })
    }

    while (res.length < k && pq.getSize()) {
        const [i, j] = pq.pop().index;
        if (j + 1 < nums2.length) {
            pq.insert({
                val: nums1[i] + nums2[j + 1],
                index: [i, j + 1],
            })
        }
        res.push([nums1[i], nums2[j]]);
    }

    return res;
};