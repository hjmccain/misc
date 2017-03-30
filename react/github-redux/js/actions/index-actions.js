export const ADD_REPO = 'ADD_REPO';
export const RATE_REPO = 'RATE_REPO';

const uuid = (function () {
	var id = 0;
	return () => id++;
})();

export const addRepo = (repo) => ({
	type: ADD_REPO,
	repo,
	id: uuid()
});

export const rateRepo = (id, rating) => ({
	type: RATE_REPO,
	id,
	rating
});

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repo, description) => ({
	type: FETCH_DESCRIPTION_SUCCESS,
	repo,
	description
});

export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (repo, error) => ({
	type: FETCH_DESCRIPTION_ERROR,
	repo,
	error
});

// const fetchDescription = function(repository) {
// 	function(dispatch) {
// 		const url = `https://api.github.com/repos/${repository}`;
// 		return fetch(url).then(response => {
// 			if (!response.ok) {
// 				// TODO: discuss with Nic
// 				const error = new.Error(response.statusText)
// 				error.response = response
// 				throw error;
// 			}
// 		})
// 		.then(response => response.json())
// 		.then(data =>
// 			dispatch(fetchDescriptionSuccess(repo, data.description))
// 		)
// 		.catch(error =>
// 			dispatch(fetchDescriptionError(repo, error))
// 		);
// 	};
// };

export const fetchDescription = repository => dispatch => {
	const url = `https://api.github.com/repos/${repository}`;
	return fetch(url).then(response => {
		debugger;
		if (!response.ok) {
			// TODO: discuss with Nic
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(response => response.json())
	.then(data =>
		dispatch(fetchDescriptionSuccess(repository, data.description))
	)
	.catch(error =>
		dispatch(fetchDescriptionError(repository, error))
	);
};
