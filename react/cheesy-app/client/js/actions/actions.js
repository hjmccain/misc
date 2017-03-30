export const CHEESE_REQUEST = 'CHEESE_REQUEST';
export const cheeseRequest = () => ({
	type: CHEESE_REQUEST,
	loading: true
});

export const  FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheeses => ({
	type: FETCH_CHEESE_SUCCESS,
	cheeses,
	error: false
})

export const  FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
	type: FETCH_ERROR,
	error: true
})

export const fetchCheeses = () => dispatch => {
	dispatch(cheeseRequest());
	return fetch("http://localhost:8080/cheeses")
	.then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json();
	})
	.then(res => {
		dispatch(fetchCheeseSuccess(res))
	})
	.catch(err => {
		dispatch(fetchError(err))
	});
}

export const deleteCheese = userSelection => dispatch => {
	console.log('actions', userSelection);
	dispatch(cheeseRequest());
	return fetch(
		"http://localhost:8080/cheeses",
		{
			method: "DELETE",
			body: JSON.stringify({cheese: userSelection}),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
	})
	.then(res => {
		dispatch(fetchCheeses());
	})
	.catch(err => {
		dispatch(fetchError(err))
	});
};

export const addCheese = userInput => dispatch => {
	dispatch(cheeseRequest());
	return fetch(
		"http://localhost:8080/cheeses",
		{
			method: "POST",
			body: JSON.stringify({cheese: userInput}),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return res.json()
	})
	.then(res => {
		dispatch(fetchCheeses());
	})
	.catch(err => {
		dispatch(fetchError(err))
	});
};
