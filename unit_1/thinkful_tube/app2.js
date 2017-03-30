$(function () {

var stateObjects = (function() {

	var constants =
	{
	BASE_URL: 'https://www.googleapis.com/youtube/v3/search',
	API_KEY: 'AIzaSyABVdU1NU2bMMMNTHYVnkb8ja7Qs3kQWNQ',
	YOURUBE_WATCH_URL: 'https://www.youtube.com/watch?v='
	}

	var query =
	{
		part: 'snippet',
		q: '',
		maxResults: 10,
		pageToken: '',
		key: constants.API_KEY
	}

	return {
		constants: constants,
		query: query
	}

})();

var accessAPI = (function() {

	

	
})();

var listeners = (function() {

	function onSubmit() {
		$('#search-bar').on('submit', function(event) {
			event.preventDefault();
			searchTerm = event.currentTarget.find('input').val();
			getData(searchTerm, callback);
		});
	}

	return {
		onSubmit: onSubmit;
	}

})();

});

