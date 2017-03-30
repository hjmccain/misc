import * as actions from '../actions/index';

const emptyState = {
	guessedNumbers: [],
	answer: 0,
	feedback: 'make a guess',
	count: 0,
	fewestGuesses: Infinity
}

export const mainReducer = (state = emptyState, action) => {

	if (action.type === actions.FETCH_SUCCESS) {
		return [...state,
		fewestGuesses: action.num]

	}
	if (action.type === actions.ADD_GUESS) {

		let feedback = ""
		let guessDiff = Math.abs(action.num - state.answer);
		let count = state.count
		console.log(action.num);
		console.log(state.answer)
		console.log(guessDiff);


		if (guessDiff === 0){
			feedback = 'You Won! Click new game to play again';
		}
		else if (guessDiff <= 10){
			feedback = 'hot';
		}
		else if((guessDiff > 10) && (guessDiff <= 20)){
			feedback = 'kinda hot';
		}
		else if((guessDiff > 20) && (guessDiff <= 30)){
			feedback = 'kindof cold';
		}
		else {
			feedback = 'cold'
		}
		count ++

		return { ...state,
			guessedNumbers: [...state.guessedNumbers, action.num],
			feedback,
			count}
	}
	if(action.type === actions.NEW_GAME) {
		return { ...state,
			answer: action.magicNum,
			guessedNumbers: [],
			feedback: 'make a guess',
			count: 0,
			fewestGuesses: 99}
	}

	return state;
};
