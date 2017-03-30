const users_url = "/users";
const entries_url = "/entries";

export const SHOW_NEW_ENTRY = 'SHOW_NEW_ENTRY';
export const showNewEntry = () => ({
	type: SHOW_NEW_ENTRY
});

// SYNC // USERS

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const toggleLogin = userId => ({
	type: TOGGLE_LOGIN,
	userId
});

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = userInfo => ({
  type: GET_USER_SUCCESS,
 	userInfo,
	loggedIn: false
});

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = userInfo => ({
  type: DELETE_USER_SUCCESS,
 	userInfo
});

// SYNC // ENTRIES

export const GET_ENTRIES_SUCCESS = 'GET_ENTRIES_SUCCESS';
export const getEntriesSuccess = entriesInfo => ({
	type: GET_ENTRIES_SUCCESS,
	entriesInfo,
	selected: false
});

export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const deleteEntrySuccess = entryInfo => ({
	type: DELETE_ENTRY_SUCCESS,
	entryInfo
});

export const SELECT_ENTRY = 'SELECT_ENTRY';
export const selectEntry = id => ({
	type: SELECT_ENTRY,
	id
})

export const SELECT_MOOD = 'SELECT_MOOD';
export const selectMood = mood => ({
	type: SELECT_MOOD,
	mood
})

// ASYNC // ENTRIES

export const selectAndUpdate = (id, mood, selected, entry) => dispatch => {
	return fetch(entries_url + '/' + id)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			dispatch(selectEntry(id))
		}).then(res => {
			dispatch(updateEntry(id, mood, selected, entry))
		});
};

export const getEntries = (id = '') => dispatch => {
	return fetch(entries_url + '/' + id)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('get entry success', res);
			dispatch(getEntriesSuccess(res));
		}).catch(err => {
			console.log('error:', err);
		});
}

export const postNewEntry = (text, mood) => dispatch => {
	console.log('actions.js arg', text, mood);
	return fetch(entries_url,
		{
			method: "POST",
			body: JSON.stringify({
				mood: mood,
				entry: text,
				user_id: 1
			}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res;
		}).then(res => {
			console.log('post entry success');
			dispatch(selectMood('all'));
			dispatch(getEntries());			
		}).catch(err => {
			console.log('error:', err);
		});
}

export const deleteEntry = (id) => dispatch => {
	return fetch(entries_url + '/' + id,
		{
			method: "DELETE",
			body: JSON.stringify({
				id: id
			}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('delete entry success');
			dispatch(deleteEntrySuccess(res));
		}).catch(err => {
			console.log('error:', err);
		})
}

export const updateEntry = (id, mood, selected, entry) => dispatch => {
	return fetch(entries_url + '/',
		{
			method: "PUT",
			body: JSON.stringify({
				id,
				mood,
				selected,
				entry
			}),
			headers: {"Content-Type": "application/json"}
		}
	).then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('update entry success', res);
		}).catch(err => {
			console.log('error:', err);
		})
}

// ASYNC // USERS

export const getUser = () => dispatch => {
	return fetch(users_url)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('get user success');
			dispatch(getUserSuccess(res));
		}).catch(err => {
			console.log('error:', err);
		})
}

export const deleteUser = () => dispatch => {
	dispatch(dbRequest());
	return fetch(url,
		{
			method: "DELETE",
			body: JSON.stringify({id: 1}),
			headers: {"Content-Type": "application/json"}
		}
	)
		.then(res => {
			if(!res.ok) {
				throw new Error(res.statusText);
			}
		}).then(res => {
			console.log('delete user success');
		}).catch(err => {
			console.log('error');
		})
}
