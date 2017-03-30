// Linear search
var indexOf = function(array, value) {
    for (var i=0; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// Binary search
var arr = [1,2,5,7,9,10,13,33];

var binarySearch = function(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  var index = Math.floor((start + end) / 2);
  var item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

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

// Binary tree searches
var BinaryTree = function(value) {
	this.value = null;
	this.left = null;
	this.right = null;
}

// Depth-first search (in-order traversal)
BinaryTree.prototype.dfs = function(values) {
	values = values || [];
	if (this.left) {
		values = this.left.dfs(values);
	}
	values.push(this.value);
	if (this.right) {
		values = this.right.dfs(values);
	}
	return values;
}

// Breadth-first search
BinaryTree.prototype.bfs = function(values) {
	values = values || [];

	var queue = [this]; // aka root node

	while (queue.length) {
		var node = queue.shift();
		values.push(node.value);

		if (node.left) {
			queue.push(node.left);
		}

		if (node.right) {
			queue.push(node.right);
		}
	}

	return values;
}

console.log(bfs(treely));

//
