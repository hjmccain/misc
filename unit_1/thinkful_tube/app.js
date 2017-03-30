
$(function() {

// state
var baseUrl = 'https://www.googleapis.com/youtube/v3/search';
var query =
  {
    part: 'snippet',
    maxResults: '1',
    pageToken: '',
    key: 'AIzaSyABVdU1NU2bMMMNTHYVnkb8ja7Qs3kQWNQ',
    q: ''
  };

// state get/set
// get json
function getData(searchTerm, callback) {
  query.q = searchTerm;
  $.getJSON(baseUrl, query, callback);
}

// DOM renderers
function displayData(data) {
  console.log(data);
  var resultsElement = '';
  query.pageToken = data.nextPageToken;

  if (data.items) {
    data.items.forEach(function (item) {
      resultsElement +=
        '<li>' +
          '<p class="title">' + item.snippet.title + '</p>' +
          '</p><p class="thumbnail">' + 
          '<img src="' + item.snippet.thumbnails.high.url + '"></a></p>' +
          '<p class="description">' + item.snippet.description + '</p>' +
        '</li>';
        console.log(item.id.videoID);
    });

    $('#next-page').removeClass('hidden');
    query.pageToken = data.nextPageToken;

  } else {
    resultsElement += '<p>No results found.</p>';
  }

  $('#search-results').html(resultsElement);
}

// event handler

$('#search-bar').on('submit', function (event) {
  event.preventDefault();
  searchTerm = $(event.target).find('input').val();
  getData(searchTerm, displayData);
});

$('#next-page').on('click', function() {
  getData(searchTerm, displayData);
});

});








