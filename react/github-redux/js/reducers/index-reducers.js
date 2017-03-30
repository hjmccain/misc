import * as actions from '../actions/index-actions';

const initial = [];

export const repoReducer = (state = initial, action) => {

	switch (action.type) {

		case actions.ADD_REPO:
			return [...state, {
				name: action.repo,
				rating: 3,
				id: action.id
			}];

		case actions.RATE_REPO:
			var item = state.find(obj => obj.id === action.id);
			var index = state.indexOf(item);

			return [
				...state.slice(0, index),
				{
					name: item.name,
					rating: action.rating,
					id: action.id
				},
				...state.slice(index + 1)
			];

		case actions.FETCH_DESCRIPTION_SUCCESS:{
			// var item = state.find(obj => obj.id === action.id);
			// var index = state.indexOf(item);

			const index = state.findIndex(repository =>
            repository.name === action.repository
        );

			if (index === -1) {
				throw new Error('Could not find repository.');
			}
			let before = state.slice(0, index);
			let after = state.slice(index + 1);
			let newRepo = Object.assign({}, state[index], {
				description: action.description
			});
			return [...before, newRepo, ...after];
}
		case actions.FETCH_DESCRIPTION_ERROR:{
			// var item = state.find(obj => obj.id === action.id);
			// var index = state.indexOf(item);

			const index = state.findIndex(repository =>
            repository.name === action.repo
        );

			if (index === -1) {
				throw new Error('Could not find repository.');
			}
			let before = state.slice(0, index);
			let after = state.slice(index + 1);
			let newRepo = Object.assign({}, state[index], {
				description: 'No description found.'
			});
			return [...before, newRepo, ...after];}

		default:
			return state;
	}
};
