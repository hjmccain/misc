// - Exercise 1: Take an integer as input, and return a boolean indicating whether the value is even or odd.

	// repeat: num - 2
	// until: 0 or 1
	// if 0 return true, if 1 return false

	// const isEven = (num) => {
	// 	if (num === 0) {
	// 		return true;
	// 	} else if (num === 1) {
	// 		return false;
	// 	} else {
	// 		return isEven(num - 2);
	// 	}
	// }
	//
	// console.log(isEven(6));

// - Exercise 2: Take an array as input which contains an unknown set of numbers, and output an array which doubles the values of each item in that array. Test your solution by trying a handful of different arrays. Don't worry about error checking to make sure that the array you're given is valid input.

	// ary = [2, 1, 4]
	// repeat down: slice ary to decrease length by 1 [2, 1, 4] >> [1, 4] >> [4] >> []
	// stop: when ary.length === 0
	// repeat up: multiply ary[0] * 2 and add that to the rest of the array [] >> 8... [] >> 2... [8] >> 4... [2, 8]

	// const numAry = (ary) => {
	// 	if (ary.length === 0) {
	// 		return [];
	// 	} else {
	// 		return [(ary[0] * 2)].concat(numAry(ary.slice(1)));
	// 	}
	// }
	//
	// console.log(numAry([1, 2, 3]));

// - Exercise 3: Take a string as input, reverse the string, and return the new string.

	// str = 'snow'
	// repeat down: slice str to decrease length by 1, eg: snow >> sno >> sn >> s >> ''
	// stop: when str.length === 0
	// repeat up: concat str[0] with sliced str

	// const reverse = (str) => {
	// 	if (str.length === 0) {
	// 		return '';
	// 	} else {
	// 		return str.charAt(str.length - 1) + reverse(str.slice(0, -1));
	// 	}
	// }
	//
	// console.log(reverse('snow'))

// - Exercise 4: Calculates the nth [triangular number](https://en.wikipedia.org/wiki/Triangular_number).

	// num = 3
	// repeat down: reduce num by 1 eg: 3 > 2 > 1
	// stop: when num === 0
	// repeat up: add each number

	// const triangle = (num) => {
	// 	if (num === 1) {
	// 		return 1;
	// 	} else {
	// 		return num + triangle(num - 1);
	// 	}
	// }
	//
	// console.log(triangle(3));

// - Exercise 5: Split a string based upon a separator (similar to [String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)).

		// str = 'cats are the best', separator = ' ', return ['cats', 'are', 'the', 'best']
		// go thru each char in string, reducing string until str.length === 0
		// if char === ' ', slice string at char index

		// const splitString = (str) => {
		// 	if (str.length === 0) {
		// 		return '';
		// 	} else {
		// 		if (str.charAt(0) !== ' ') {
		// 			return str.charAt(0).concat(splitString(str.slice(1)));
		// 		} else {
		// 			return splitString(str.slice(1));
		// 		}
		// 	}
		// }

// 		const splitString = (str) => {
//
// 			if (str.length === 0) {
// 				return '';
// 			} else {
// 				if (str.charAt(0) !== ' ') {
// 					return str.charAt(0).concat(splitString(str.slice(1)));
// 				} else {
// 					return splitString(str.slice(1));
// 				}
// 			}
// 		}
//
// 		const splitString = (string, separator) => {
// 	let i = string.indexOf(separator);
// 	if (i === -1) {
// 		return [string];
// 	} else {
// 		return [string.slice(0, i), ...splitString(string.slice(i + 1), separator)];
// 	}
// }
//
// console.log("returns ['cats', 'are', 'the', 'best']: " + splitString('cats are the best', ' '));
//
// // calls to splitString: 'cats are the best', 'are the best', 'the best', 'best'
// // returns: ['best']=> ['the', ...['best']]=> ['are', ...['the', 'best']] =>
//
// 		console.log(putInAry('cats'));
// 		console.log(ary);
// 		console.log(word);
