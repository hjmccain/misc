let merged = [
	{
		french: 'le pain',
		english: 'bread',
		id: 1,
		rating: 1
	},
	{
		french: 'le poisson',
		english: 'fish',
		id: 2,
		rating: 0
	},
	{
		french: 'le pamplemousse',
		english: 'grapefruit',
		id: 3,
		rating: 2
	},
	{
		french: 'le velo',
		english: 'bicycle',
		id: 4,
		rating: 1
	},
	{
		french: 'l\'immeuble',
		english: 'building',
		id: 5,
		rating: 0
	}
]

const rejectionSample = (questions) => {
	let selected, idx;
	let num = Math.floor(Math.random() * 6) + 1;

	if (num === 1) {
		val = 2
	} else if (num > 1 && num < 4) {
		val = 1
	} else {
		val = 0
	}

	selected = questions.filter((q) => {
		return q.rating === val;
	});

	idx = Math.floor(Math.random() * selected.length);

	return selected[idx];
}


let questions = [
	{
		french: 'le pain',
		english: 'bread',
		id: 1
	},
	{
		french: 'le poisson',
		english: 'fish',
		id: 2
	},
	{
		french: 'le pamplemousse',
		english: 'grapefruit',
		id: 3
	},
	{
		french: 'le velo',
		english: 'bicycle',
		id: 4
	},
	{
		french: 'l\'immeuble',
		english: 'building',
		id: 5
	},
	{
		french: 'la femme',
		english: 'woman',
		id: 6
	},
	{
		french: 'l\'homme',
		english: 'man',
		id: 7
	},
	{
		french: 'la famille',
		english: 'family',
		id: 8
	},
	{
		french: 'les devoirs',
		english: 'homework',
		id: 9
	},
	{
		french: 'le chien',
		english: 'dog',
		id: 10
	},
	{
		french: 'le chat',
		english: 'cat',
		id: 11
	},
	{
		french: 'la rue',
		english: 'street',
		id: 12
	},
	{
		french: 'les mains',
		english: 'hands',
		id: 13
	},
	{
		french: 'les yeux',
		english: 'eyes',
		id: 14
	},
	{
		french: 'la faim',
		english: 'hunger',
		id: 15
	}
]

let history = [
	{
		id: 1,
		rating: 0
	},
	{
		id: 2,
		rating: 2
	},
	{
		id: 3,
		rating: 1
	},
	{
		id: 4,
		rating: 1
	},
	{
		id: 5,
		rating: 0
	},
	{
		id: 6,
		rating: 2
	},
	{
		id: 7,
		rating: 0
	},
	{
		id: 8,
		rating: 1
	}
]

let users = [
	{
		id: 6,
		rating: 2
	},
	{
		id: 8,
		rating: 1
	},
	{
		id: 1,
		rating: 0
	}
]

const questionSelect = (questions, userHistory, start = 0, array = []) => {
	let current = userHistory[start];
	let limit;

	if (current === userHistory[userHistory.length]) {
		return array;
	}

	if (current.rating === 0) {
		limit = 1;
	} else {
		limit = current.rating * 2;
	}

	let findMatch = questions.filter((question) => {
		if (question.id === current.id) {
			return question;
		}
	});

	findMatch.rating = current.rating;

	for (let i = 0; i < limit; i++) {
		array.push(findMatch[0]);
	}

	start++
	return questionSelect(questions, userHistory, start, array);
}

// 'new array' based off of semi-randomly selecting weighted questions out of history array -- this may or may not contain duplicates
// create merged output array from 'new array' and questions
