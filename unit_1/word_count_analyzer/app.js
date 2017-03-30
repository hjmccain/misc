/*
In this challenge, you'll implement a small web app that runs basic text analytics on user
submitted text. We provide initial HTML and CSS files, and you'll be responsible for adding
CSS classes to the HTML for your JavaScript code to hook into, and for writing JavaScript code 
that computes and displays 4 metrics:

Total word count of the submitted text
Unique word count of the submitted text
Average word length in characters of the submitted text
Average sentence length in characters of the submitted text.

The program should print each of these metrics in the appropriate area in the results section.

1 // get the user input and save it as a variable

*/

$(document).ready(function() {

// STATE
var wordArray = [],
	wordInput = "";

function thingsToDo() {
	var sentenceArrayLength = (wordInput.split(". ")).length,
		wordArray = wordInput.split(" ");

	function wordLength(array) {
	var totalLength = 0;
		for (var i = 0; i < array.length; i++) {
			totalLength += array[i].length;
		}
	  return (totalLength/(array.length));
	}

	function wordFrequency(array) {
	var wordCount = {};
		for (var i = 0; i < wordArray.length; i++) {
			// if word in array equals the same word in the word-count object keys
			if (array[i] in wordCount) {
				// then take the word in the ACTUAL object and increment value by one
				wordCount[array[i]] = (wordCount[array[i]] + 1);
			} else {
				wordCount[array[i]] = 1;
			}
		}
		return Object.keys(wordCount).length;
	}

	// RENDER
	function showResults(wordArray) {
		$('.text-report').removeClass('hidden');
		$('dd').addClass('word-style')
		$('dd').eq(0).text((wordArray.length) + " words total"),
		$('dd').eq(1).text((wordFrequency(wordArray)) + " unique words"), // only place object is used
		$('dd').eq(2).text(wordLength(wordArray) + " letters per word"),
		$('dd').eq(3).text((((wordArray.length)/sentenceArrayLength)) + " words per sentence");
	}

showResults(wordArray);
}

// LISTEN
$('form').submit(function(event) {
	console.log("hi");
	event.preventDefault();
	wordInput = $('#user-text').val();
	thingsToDo();
})

});




/*
	// for (var i = 0; i < array.length; i++) {
	// 		newObject = {
	// 		word: array[i],
	// 		frequency: null,
	// 		length: array[i].length
	// 	}
	// 	wordObjects.push(newObject);
	// }



		for (var w = 0; w < array.length; w++) {
		var count = 1;
		if (objectArray.length === 0) {
			newObject = {
			name: array[w],
			frequency: count
		}
		else if (objectArray.length > 0) {
			for (var o = 0; o < objectArray.length; o++) {
				if (objectArray.name === array[w]) {
					objectArray.frequency = (count + 1);
				}
				else {
					newObject = {
					name: array[w],
					frequency: count
					}
				}
			}
			wordObjects.push(newObject);
		}
	}
	
*/