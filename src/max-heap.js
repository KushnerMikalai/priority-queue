const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		var newNode = new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode)
	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		let depthOf = object => {
			if (object === null) return 0;

			var leftNode = depthOf(object.left),
				rightNode = depthOf(object.right);

			return leftNode + rightNode + 1;
		};

		return depthOf(this.root)
	}

	isEmpty() {
		return !this.size();
	}

	clear() {
		this.root = null;
		this.parentNodes = []
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
