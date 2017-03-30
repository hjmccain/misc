// Given an array of numbers, write an algorithm to find out the products of every number,
// except the one at that index. For example, if the input was [1, 3, 9, 4], the output should
// be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).
//
// input: [1, 3, 9, 4]
// output: [108, 36, 12, 27]

//algorithm
// function that takes an array as an argument
// loop over array i index
// for each item in the array
// loop again! j index over the same array
// if index === index[i]
// inside this second loop set array[i] = array[i]*array[j]
// return array

// arr1 = [2, 3, 9, 4]
// HOLDING VARIABLE arr2 = []
// ANSWER ARRAY arr3 = []

// arr1.pop >> push n into arr2
	// arr1 = [1, 3, 9]
	// var = 4
// multiply everything in arr1 and push into 3rd array
	// arr3 = [27] >> is better to shift or .reverse()
// arr2.pop >> unshift into arr1
	// arr1 = [4, 1, 3, 9]
	// var = ''
// repeat
	// arr1 = [4, 1, 3]
	// var = 9
// etc. for array.length
	// [27, 12, 36, 108].reverse() >> ta da!

	const multipliedValues = (ary) => {
		let holdingVal = '';
		let answerAry = [];

		ary.map((value) => {
			holdingVal = ary.pop();
			answerAry.push(ary.reduce((a, b) => a * b));
			ary.unshift(holdingVal);
		});

		return answerAry.reverse();
	}

	console.log(multipliedValues([1, 3, 9, 4]));
