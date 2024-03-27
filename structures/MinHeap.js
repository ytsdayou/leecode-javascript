export class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    nodeUp() {
        let index = this.heap.length - 1;
        while (this.parent(index) >= 0 && this.heap[this.parent(index)].val > this.heap[index].val) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    nodeDown() {
        let index = 0;
        while(this.leftChild(index) < this.heap.length) {
            let smallerChildIndex = this.leftChild(index),
                rightIndex = this.rightChild(index);
            if(rightIndex < this.heap.length && this.heap[rightIndex].val < this.heap[smallerChildIndex].val ) {
                smallerChildIndex = rightIndex;
            }
            if(this.heap[index].val < this.heap[smallerChildIndex].val) {
                break;
            }
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    insert(node) {
        if(typeof node === 'number') {
            node = {
                val: node
            }
        }
        this.heap.push(node);
        this.nodeUp();
    }

    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.shift();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.nodeDown();
        return min;
    }

    getMin() {
        return this.heap[0];
    }

    getSize() {
        return this.heap.length;
    }
}