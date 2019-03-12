const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		this.heap.push(data, priority);
		if (this.size() === this.maxSize) throw new Error('Queue has max size');
	}

	shift() {
		var removedNode = this.heap.pop();

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.size() === 0;
	}
}

module.exports = PriorityQueue;
