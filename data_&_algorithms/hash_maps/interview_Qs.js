// Write an algorithm to check whether any permutation of a string is a palindrome (a string which reads the same forwards and backwards).
// For example, "madam", "amadm" and "cllci" should all return true, whereas "caabl" and "aaxxis" should return false.


const isPalindrome = (str) => {
	let countHash, even = 0, odd = 0, palindrome;

	countHash = str.split('').reduce((object, letter) => {
		letter in object ? object[letter]++ : object[letter] = 1;
		return object;
	}, {});

	for (key in countHash) {
		countHash[key] % 2 === 0 ? even++ : odd++;
		odd > 1 ? palindrome = false : palindrome = true;
	}

	return palindrome;
}

console.log(isPalindrome('hannha'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('hann'));

// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

const anagrammation = (ary, answer = []) => {
	let sorted = answer, unsorted = [], anagrams = [];

	if (ary.length === 0) return;

	ary.filter((word) => {
		let constant = ary[0].split('').sort().join('');
		let comparison = word.split('').sort().join('');
		comparison === constant ? anagrams.push(word) : unsorted.push(word) ;
		return anagrams;
	});

	sorted.push(anagrams);
	anagrammation(unsorted, sorted);
	return sorted;
}

console.log(anagrammation(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));









// Write a hash map implementation which uses separate chaining.
