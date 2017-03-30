var myArray = [5, 2, 1];

function bubbleSort(array) {
  var swapped = false;

  array.forEach((element, index, array) => {
    if (array[index] > array[index + 1]) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
      swapped = true;
    }
  });

  if (swapped) {
    return bubbleSort(array);
  }

  return array;
}


///////////////////////////////////////////


function mergeSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }

  var middle = Math.floor(ary.length / 2);
  var left = ary.slice(0, middle);
  var right = ary.slice(middle, ary.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, ary);
}

function merge(left, right, ary) {

  var leftIndex = 0;
  var rightIndex = 0;
  var outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      ary[outputIndex++] = left[leftIndex++];
    } else {
      ary[outputIndex++] = right[rightIndex++];
    }
  }

  for (var i = leftIndex; i < left.length; i++) {
    ary[outputIndex++] = left[i];
  }

  for (var i = rightIndex; i < right.length; i++) {
    ary[outputIndex++] = right[i];
  }

  return ary;

}


///////////////////////////////////////////


// var quickAry = [23784190, 47653, 90, 42, 678, 1, 11, 76980, -45720, 789];
var quickAry = [11, 12, 9, 3, 7, 4, 15, 9];

function quickSort(array, start = 0, end = array.length) {

  if (start >= end) {
    return array;
  }

  var middle = partition(array, start, end);

  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);

  return array;
}

function partition(array, start, end) {
	var last = (end - 1);

  var pivot = array[last];
  var j = start;

  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }

  [array[last], array[j]] = [array[j], array[last]];

	return j;

}

/////////////////////////////////////

const hiLoArray = [1, 5, 3, 2, 1, 2, 5, 7]

const hiLo = (ary, high, low) => {
	let empty = Array((high - low) + 1).fill(0);
	let sorted = [];

	ary.forEach((num) => empty[(num - (low))]++ );

	empty.forEach((num) => {
		for (let i = 0; i < num; i++) {
			sorted.push(low);
		}
		low++;
	});

	return sorted;
}

/////////////////////////////////////

const ordered = Array(20).fill().map((x, i) => i + 1);

const shuffle = (array) => {

	array.forEach((elem, idx, ary) => {
		let idx2 = Math.floor(Math.random() * ((array.length - 1) - 1)) + 1;
		[ary[idx], ary[idx2]] = [ary[idx2], ary[idx]];
	});

	return array;
}

/////////////////////////////////////

const myBooks = [{ last: 'D', first: 'D' }, {last: 'A', first: 'B' }, { last: 'C', first: 'B' }, { last: 'A', first: 'A' }, { last: 'C', first: 'C' }];

const bookSort = (array) => {
	let swapped = false;

	array.forEach((book, idx, books) => {
		if (books[idx + 1]) {
			if (books[idx].last === books[idx + 1].last) {
				if (books[idx].first > books[idx + 1].first) {
					[books[idx], books[idx + 1]] = [books[idx + 1], books[idx]];
				}
			} else {
				if (books[idx].last > books[idx + 1].last) {
					[books[idx], books[idx + 1]] = [books[idx + 1], books[idx]];
					swapped = true;
				}
			}
		}
	});

	if (swapped === false) {
		return array;
	} else {
		return bookSort(array);
	}
	
}
















//
