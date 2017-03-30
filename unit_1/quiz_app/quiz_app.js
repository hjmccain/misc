// STATE
var countCorrectAnswers = 0,
	nextQuestion = 0;

// DATA

var questionDatabase = [
	{
		question: 'what is my favourite colour?',
		answer_a: 'red',
		answer_b: 'blue',
		answer_c: 'green',
		answer_d: 'orange',
		correct_answer: 'js-d',
		display_answer: 'D: Orange'
	},
	{
		question: 'what is the second-best color?',
		answer_a: 'pink',
		answer_b: 'teal',
		answer_c: 'seafoam',
		answer_d: 'salmon',
		correct_answer: 'js-c',
		display_answer: 'C: Seafoam'
	} 
]

for (var prop in questionObject) {
	console.log(prop);
}

// MODIFY

function iterateNextQuestion() {
	nextQuestion++;
	console.log(nextQuestion);
}

function iterateCorrect() {
	countCorrectAnswers++;
	console.log('+1 correct');
}

function retakeQuiz() {
	countCorrectAnswers = 0;
	nextQuestion = 0;
	quizPageLoad();
}

function reloadQuizzly() {
	// make "reset" instead of reload?
	window.location.reload();
}
	
	// everytime an answer is submitted, we compare currentAnswer to actual answers
		// if they match 
			// iterate correctAnswers to keep track of how many they got right
			// pass off to render: go to correct answer page
		// if they don't match
			// pass off to render: go to incorrect answer page
	// after final page loads, set all state objects back to initial values 


// RENDER

	// 1 function loads quiz shell
		// checks currentQuestion, populates the form, iterates currentQuestion
		// pass off to listen: wait for user to submit answer 

	// 2a function that loads incorrect answer page
		// needs access to questions[x].correctAnswer
	// 2b function that loads correct answer page
		// need access to countCorrectAnswers
		// both of these pages have a "next question" link that pulls currentQuestion and loops back to top
			// load quiz shell
		// unless it's the last question
			// "submit your quiz" load final page

	// 3 final page loads
		// generates final results based off correctAnswers
		// pass off to modify: reset initial values

	// next steps:
		// pass off to listen: user can click back to home
		// pass off to listen: user can click "play again" that will bring them to quiz page #1

function quizPageLoad() {
	$('#js-home-button').text('Quizzly Home');
	$('#js-running-quiz-results').removeClass('hidden').text('You have completed ' + nextQuestion +
		' of 5 questions.')
	$('#js-quiz').removeClass('hidden');
	$('#final-quiz-results, #js-next-question-button, #js-take-quiz-again, #js-start-quiz, #js-home-page-text').addClass('hidden');
	loadQuestion();
}

function loadQuestion() {
	var questionObject = questionDatabase[nextQuestion]
	$('#js-question-text').text(questionObject.question);

	// for (var prop in questionDatabase[0]) {
	// 	jqueryCommands = ('$(#js' + prop + ')' +
	//                     '.text(questionObject.' + prop + ')');
	//   console.log(jqueryCommands);
	// }

}

// pass off to listen -- listen for "submit" button

function checkAnswer() {
	var userAnswer = $("form input[type='radio']:checked").val();

	if (userAnswer === questionDatabase[nextQuestion].correct_answer) {
		$('#js-running-quiz-results').text('Great job, that\'s correct!');
		iterateCorrect();
	}
	else {
		$('#js-running-quiz-results').text('Sorry, that\'s incorrect.' + 
			' The correct answer is ' + (questionDatabase[nextQuestion].display_answer) );
	}
	
	loadAnswerPage();
}

function loadAnswerPage() {
	$('#js-home-button').text('Quizzly Home');
	$('#js-quiz').addClass('hidden');
	$('#js-next-question-button').removeClass('hidden');
}

// pass off to listen -- listen for "next" button

function chooseNextPage () {
	if (questionDatabase[nextQuestion] === questionDatabase[questionDatabase.length-1]) {
		loadLastPage();
	} else {
		iterateNextQuestion();
		quizPageLoad();
	}
}


// either move on to last page or circle back up to beginning of render section

function loadLastPage() {
	$('#js-home-button').text('Quizzly Home');
	$('#js-running-quiz-results').text('You finished!');
	$('#js-next-question-button').addClass('hidden');
	$('#js-take-quiz-again, #final-quiz-results').removeClass('hidden');
	// text
	$('#js-correct-answers').text('Correct: ' + countCorrectAnswers );
	$('#js-incorrect-answers').text('Incorrect: ' + (questionDatabase.length - countCorrectAnswers) );
	$('#js-final-score').text('Final score: ' + (countCorrectAnswers/questionDatabase.length)*100 + "%" );
}

// LISTEN

$('#js-start-quiz').on('click', quizPageLoad);

$('#js-submit-button').on('click', function(event) {
	if ($("form input[type='radio']:checked").length <= 0) {
		alert('Please select an answer.')
	}
	else {
		checkAnswer(); 
	}
});

$('#js-next-question-button').on('click', chooseNextPage);

$('#js-take-quiz-again').on('click', retakeQuiz);

$("js-home-button").on('click', reloadQuizzly);





