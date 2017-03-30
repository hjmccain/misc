// Write an algorithm for finding a book using Dewey decimal system
// One section
// One shelf
// 1 of each number
// Cruel friend asks you to find the book she's guessing
// You create an algorithm to find the damn book

const bookFinder = (book, start = 500, end = 600) => {
	let half = Math.floor((start + end) / 2);
	console.log('Checking at...', half);

	if (start > half) return 'Book not found.'

	if (book === half) return 'Found at ' + half;

	if (book < half) {
		return bookFinder(book, start, half - 1);
	} else {
		return bookFinder(book, half + 1, end);
	}

}

console.log(bookFinder(572));

// Given a number N, guess N without guessing higher than N more than once.
// Basically: binary search until you guess over, then linear search
// Hint: for v2, the magic number is actually 14 -- go up by 14 until you go over, then linear search

const findNum = (num, start = 0, end = 100) => {
	let half = Math.floor((start + end) / 2);

	if (half < num) {
		if (start > end) return 'number not found';

		if (num === half) return num;

		if (num < half) {
			return findNum(num, start, half - 1);
		} else if (num > half) {
			return findNum(num, half + 1, end);
		}
	} else {
		for (let i = start; i <= end; i++) {
			if (i === num) return i;
		}
	}

}

// console.log(findNum(5));

// Find the best possible profit in an array of days on the stock market
// Buy one day, sell on another

const stocks = (ary, max = 0, start = 0) => {
	let profit = max;

	if (ary.length === 0) return profit;

	for (val of ary) {
		if ((val - ary[0]) > profit) {
			profit = val - ary[0];
		}
	}

	return stocks(ary.slice(start++), profit, start++);
}

// console.log(stocks([128, 97, 121, 123, 98, 97, 105]));
