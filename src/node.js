class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left !== null) {
			if (!this.right) {
				this.right.parent = this;
				this.right = node;
			}
		} else {
			this.left.parent = this;
			this.left = node;
		}
	}

	removeChild(node) {
		let data = node.data;
		if (data === this.left.data) {
			this.left = null;
			node.parent = null;
		} else if (data === this.right.data) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error('Уупс!');
		}
	}

	remove() {
		if (this.parent !== null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent !== null) {

		}
	}
}

module.exports = Node;
