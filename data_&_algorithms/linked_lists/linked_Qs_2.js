var list = require('./linked');

const loopThru = (node, count = 1) => {
	if (node.next === null) {
		return count;
	}
	return loopThru(node.next, count + 1);
}

const midpoint = (head) => {
	let fast = head;
	let slow = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

const thirdFromLast = (list, node, idx = 0) => {

	if (node.next === null) {
		return list.get(count - 3);
	}

	return loopThru(list, node.next, idx + 1);
}

console.log(thirdFromLast(list.colors, list.colors.head));
