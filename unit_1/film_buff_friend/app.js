alert('app.js called');

	function getData() {
		$.getJSON('https://crossorigin.me/https://www.tastekid.com/api/similar?q=fargo&k=247407-APIproje-K6WHW9SO', function(data) {
			console.log("getData Called");
			console.log(data);
		}).
		done(function(data){
			console.log("done");
		}).
		fail(function(err){
			console.error(err);
		});
	}

	getData();