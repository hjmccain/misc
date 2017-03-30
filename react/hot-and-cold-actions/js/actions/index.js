export const NUMBER_GEN = 'NUMBER_GEN';
export const numberGen = () => ({
  type: NUMBER_GEN,
  number:  Math.floor((Math.random() * 100) + 1)
});

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = num => ({
	type: FETCH_SUCCESS,
	num
});

export const fetchBestScore = () => dispatch => {
	const url = "http://localhost:8081/fewest-guesses";
	return fetch(url).then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response.json();
	})
	.then(num => {
		dispatch(fetchSuccess(num))
	})
	.catch(error => {
		console.log(error);
	});
};

export const saveBestScore = () => dispatch => {
	const url = "http://localhost:8081/fewest-guesses";
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify({guess: 5}),
		headers: {"Content-Type": "application/json"}
	}).then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
  })
	.then(response => {
		return response.json()
	})
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	});
};
