import { MinHeap } from "../../../structures/MinHeap";

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
export const findMaximizedCapital = function(k, w, profits, capital) {
    let minHeap = new MinHeap(), maxHeap = new MinHeap();
    for(let i = 0; i < profits.length; i++) {
        minHeap.insert({
            val: capital[i],
            profilt: profits[i],
        });
    }

    for(let j = 0; j < k; j++) {
        while(minHeap.getSize() && minHeap.getMin().val <= w) {
            let node = minHeap.pop();
            maxHeap.insert( -1 * node.profilt );
        }

        if( !maxHeap.getSize() ) {
            break;
        }

        w += -1 * maxHeap.pop().val;
    }

    return w;
};