var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
URL += '?' + $.param({
  'api-key': "1b4a231dfd4449f28a0a4849d46dade1",
  'q': 'taiwan'
});

fetch(URL).then(function(response) {
	console.log(response);
	console.log(response.headers);
	return response.json();
}).then(function(response) {
	var nytData = response;
	eachObject = nytData.response.docs;
	printOut(eachObject);
});

function printOut(eachObject) {
	console.log(eachObject);
}