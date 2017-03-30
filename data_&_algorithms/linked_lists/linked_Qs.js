var list = require('./linked');

const loopThru = (node, count = 1) => {
	if (node.next === null) {
		return count;
	}
	return loopThru(node.next, count + 1);
}

const mid = (head) => {
	let fast = head;
	let slow = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

// console.log(mid(list.colors.head))

// Write an algorithm to find the middle element of a linked list without using the .length property
const midpoint = (node) => {
	let length = loopThru(node);
	let midpoint, values = [];

	length % 2 === 0 ?
		midpoint = [length/2 - 1, length/2] :
		midpoint = [length/2 - .5];

	for (i = 0; i < midpoint.length; i++) {
		 values.push(list.colors.get(midpoint[i]));
	}

	return values;
}

// Write an algorithm to find the third element from the end of a linked list without using the .length property
const threeFromLast = (node) => {
	let length = loopThru(node) - 1;
	return list.colors.get(length - 2);
}

// Write an algorithm to reverse a linked list
const reverseList = (list, length) => {
	let item = list._find(length);
	let prevItem = list._find(length - 1);

	if (length === 0) {
		return item.next = null;
	}

	reverseList(list, length - 1)
	return item.next = prevItem;
}

// console.log(reverseList(list.colors, list.colors.length - 1));
// console.log(list.colors);

// Write an algorithm to find whether a linked list has a cycle (i.e. whether a node // in the list has its next value pointing to an earlier node in the list)
const rabbitAndTurtle = (turtle, rabbit) => {

	if (turtle.next === null || rabbit.next === null) {
		return 'No loops found.'
	} else if (rabbit === turtle) {
		return 'Loop found.'
	}

	return rabbitAndTurtle(turtle.next, rabbit.next.next);
}

// list.colors._find(4).next = list.colors._find(3); // create loop in list
// console.log(rabbitAndTurtle(list.colors.head.next, list.colors.head.next.next));
