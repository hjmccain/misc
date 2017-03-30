import * as actions from '../actions/actions';
import { combineReducers } from 'redux';

function immutableSplice(arr, start, deleteCount, ...items) {
	return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

const showReducer = (state = true, action) => {
	switch (action.type) {
		case actions.SHOW_NEW_ENTRY:
			return {
				show: false
			}
		default:
			return state;
	}
}

const selectedEntryReducer = (state = [], action) => {
	switch (action.type) {
		case actions.SELECT_ENTRY:
			console.log('selectedEntryReducer/entry', action.id);
			return {
				selectedEntryId: action.id
			}
		case actions.SELECT_MOOD:
			console.log('selectedEntryReducer/mood', action.mood);
			return {
				selectedMood: action.mood
			}
		default:
			return state;
	}
}

const usersReducer = (state = [], action) => {
	switch (action.type) {
		case actions.GET_USER_SUCCESS:
			var userArray = action.userInfo.users.map((user) => {
				var username = user.username, password = user.username, id = user.id
				return {
					username: user.username,
					password: user.password,
					id: user.id,
					loggedIn: false
				}
			})
			return {
				...state,
				usersList: userArray
			};
		case actions.DELETE_USER_SUCCESS:
			return {
				...state,
				usersList: action.userInfo,
			};
		case actions.TOGGLE_LOGIN:
			var userToUpdate = state.usersList.filter((user) => {
				return (user.id === action.userId)
			});
			userToUpdate = {...userToUpdate[0], loggedIn: true}
			const newUsers = immutableSplice(state.usersList, 3, 1, userToUpdate)
			return {
				...state,
				usersList: newUsers
			}
		default:
			return state;
	}
}

const entriesReducer = (state = [], action) => {
	console.log(action.type)
	switch (action.type) {
		case actions.GET_ENTRIES_SUCCESS:
			console.log('returning tries success')
			return {
				...state,
				entriesList: action.entriesInfo
			};
		default:
			console.log('returning default')
			return state;
	}
}

const entrySelector = (state = '', action) => {
	switch (action.type) {
		case actions.GET_ENTRY:
			console.log('selected entry', action.entryId);
		default:
			return state;
	}
}

export default combineReducers({
	showReducer,
	selectedEntryReducer,
  usersReducer,
  entriesReducer
});
