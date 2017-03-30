import * as actions from '../actions/actions';

const initial = {
    cheeses: [],
    loading: false,
    error: null
};

export const stateReducer = (state = initial, action) => {
	switch (action.type) {
		case actions.CHEESE_REQUEST:
			return { ...state, loading: action.loading }
		case actions.FETCH_CHEESE_SUCCESS:
			return { ...state, cheeses: action.cheeses, error: action.error }
		case actions.FETCH_ERROR:
			return { ...state, error: action.error }
		default:
			return state;
	};
};
