var countCorrectAnswers = 0,
	nextQuestion = 0;

database = [
	{
		question: 'What is Hannah\'s favorite color?',
		options: [ 'salmon', 'emerald', 'jet black', 'seafoam' ],
		answer: [ 'A', 'salmon' ]
	}
	// {
	// 	question: 'What is Hannah\'s second-favorite color?',
	// 	options: [ 'almond', 'cobalt', 'chartreuse', 'lobster red' ],
	// 	answer: [ 'B', 'cobalt' ]
	// }
]

function loadQuizPage() {
	
}

// LISTENERS

$('#take-quiz').on('click', loadQuizPage);