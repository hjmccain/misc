var BinarySearchTree = function(key, value, parent) {
	this.key = key || null;
	this.value = value || null;
	this.parent = parent || null;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function(key, value) {
	if (this.key === null) {
		this.key = key;
		this.value = value;
	} else if (key < this.key) {
		if (this.left === null) {
			this.left = new BinarySearchTree(key, value, this);
		} else {
			this.left.insert(key, value);
		}
	} else {
		if (this.right === null) {
			this.right = new BinarySearchTree(key, value, this);
		} else {
			this.right.insert(key, value);
		}
	}
};

BinarySearchTree.prototype.get = function(key) {
	if (this.key === key) {
		return this.value;
	} else if (key < this.key && this.left) {
		return this.left.get(key);
	} else if (key > this.key && this.right) {
		return this.right.get(key);
	} else {
		throw new Error('Key error.');
	}
};

BinarySearchTree.prototype.remove = function(key) {
	if (this.key === key) {
		if (this.left && this.right) {
			var successor = this.right._findMin();
			this.key = successor.key;
			this.value = successor.value;
			successor.remove(successor.key);
		} else if (this.left) {
			this._replaceWith(this.left);
		} else if (this.right) {
			this._replaceWith(this.right);
		} else {
			this._replaceWith(null);
		}
	} else if (key < this.key && this.left) {
		this.left.remove(key);
	} else if (key > this.key && this.right) {
		this.right.remove(key);
	} else {
		throw new Error('Key error.');
	}
}

BinarySearchTree.prototype._replaceWith = function(node) {
	if (this.parent) {
		if (this === this.parent.left) {
			this.parent.left = node;
		} else if (this === this.parent.right) {
			this.parent.right = node;
		}
		if (node) {
			node.parent = this.parent;
		}
	} else {
		if (node) {
			this.key = node.key;
			this.value = node.value;
			this.left = node.left;
			this.right = node.right;
		} else {
			this.key = null;
			this.value = null;
			this.left = null;
			this.right = null;
		}
	}
};

BinarySearchTree.prototype._findMin = function() {
	if (!this.left) {
		return this;
	}
	return this.left._findMin();
}

// let treely = new BinarySearchTree(10, 'start', null);
// treely.insert(11, '11');
// treely.insert(14, '14');
// treely.insert(9, '9');
// treely.insert(8, '8');
// treely.insert(12, '12');
// treely.insert(13, '13');
// treely.insert(7, '7');
// console.log(treely);

// const binaryTree = (obj) => {
// 	let left, right;
// 	if (!obj.left) {
// 		console.log(`End of left branch at ${obj}`)
// 	} else {
// 		console.log(obj.key)
// 		left = (obj.key > obj.left.key);
// 	}
// 	if (!obj.right) {
// 		console.log(`End of right branch at ${obj}`)
// 	} else {
// 		console.log(obj.key)
// 		right = (obj.key < obj.right.key);
// 	}
// 	if (!obj.left && !obj.right) {
// 		console.log(`End of branch at ${obj}`)
// 	}
// 	if (left === true && right === true) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// 	binaryTree(obj.right.key);
// 	binaryTree(obj.left.key);
// }
//
// console.log(binaryTree(treely));

// const treeHeight = (root) => {
// 	let leftHeight, rightHeight;
//
// 	if (root === null) {
// 		return 0;
// 	} else {
// 		leftHeight = treeHeight(root.left);
// 		rightHeight = treeHeight(root.right);
// 	}
//
// 	return Math.max(leftHeight, rightHeight) + 1;
// }

// console.log(treeHeight(treely));

const treely = {
	value: 10,
	left: {
		value: 8,
		left: {
			value: 6,
			left: null,
			right: null
		},
		right: {
			value: 9,
			left: null,
			right: null
		}
	},
	right: {
		value: 12,
		left: {
			value: 11,
			left: null,
			right: null
		},
		right: {
			value: 15,
			left: null,
			right: null
		}
	}
}

const treeCheck = (root) => {
	let left, right;

	if (root.right === null || root.left === null) {
		return;
	} else if (right === false || left === false) {
		return false;
	} else {
		left = root.left.value > root.value ? false : true;
		right = root.right.value > root.value ? true : false;
	}

	treeCheck(root.left);
	treeCheck(root.right);
	return left === right;
}

// console.log(treeCheck(treely));

const thirdLargest = (root) => {
	if (root.left === null || root.right === null) {
		return;
	} else if (root.left.value > root.right.value) {
		throw new Error('Not a binary search tree.')
	} else {
		thirdLargest(root.right);
		return root.value;
	}
}

console.log(thirdLargest(treely))




//
