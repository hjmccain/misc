import 'isomorphic-fetch';

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	magicNum: Math.floor(Math.random() * 100) + 1
})

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = num => ({
	type: ADD_GUESS,
	num: num
});

export const FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
export const fetchFewestGuesses = () => dispatch => {
	const url = "http://localhost:8081/fewest-guesses";
	return fetch(url).then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(response => response.json())
	.then(data =>
		dispatch(fetchSuccess(fewestGuesses))
	)
	.catch(error =>
		dispatch(fetchError(fewestGuesses, error))
	)
};

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = num => ({
	type: FETCH_SUCCESS,
	num
});
