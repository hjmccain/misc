var LinkedList = function() {
	this.length = 0;
	this.head = null;
}

LinkedList.prototype.insert = function(index, value) {
	if (index < 0 || index > this.length) {
		throw newError('Index error');
	}

	var newNode = {
		value: value
	}

	if (index === 0) {
		newNode.next = this.head;
		this.head = newNode;
	} else {
		// newNode = value: blue, index: 3, next: ?
		// node = value: red, index: 2, next: gray
		var node = this._find(index - 1);
		// newNode = next: gray
		newNode.next = node.next;
		// node = value: red, index: 2, next: blue
		node.next = newNode;
	}

	this.length++
}

LinkedList.prototype._find = function(index) {
	var node = this.head;
	for (var i = 0; i < index; i++) {
		node = node.next;
	}

	return node;
}

LinkedList.prototype.get = function(index) {
	if (index < 0 || index >= this.length) {
		throw new Error('Index error');
	}

	return this._find(index).value;
}

LinkedList.prototype.remove = function(index) {
	if (index < 0 || index >= this.length) {
		throw new Error('Index error');
	}

	if (index === 0) {
		this.head = this.head.next;
	} else {
		var node = this._find(index - 1);
		node.next = node.next.next;
	}

	this.length--;
}

var colors = new LinkedList;
colors.insert(0, 'blue');
colors.insert(1, 'orange');
colors.insert(2, 'mauve');
colors.insert(3, 'chartreuse');
colors.insert(4, 'salmon');

exports.colors = colors;
exports.LinkedList = LinkedList;

// 1) tortoise & hare approach (one traverses .next,
//		the second traverses next.next)
// 2) traverse to end & take note of index
//		then find the value of the element at index - 3
// 3) find length -- say length is 11, so last index = 11
//		11 points to 10
//		etc.
//		then reset head
// 4) ... floyd's cycle-finding algorithm
