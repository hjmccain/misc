

var getFromApi = function(endpoint, query) {

    var url = 'https://api.spotify.com/v1/' + endpoint;

    // what is this?
    var queryString = Qs.stringify(query);

    if (queryString) {
        url += '?' + queryString;
    };

    return fetch(url).then(function(response) {
        if (response.status < 200 || response.status >= 300) {
            return Promise.reject(response.statusText);
        }
        return response.json();
    }).catch(function(err) {
        console.log(err);
    });

};

var artist;

var getArtist = function(name) {

    var query =
    {
        q: name,
        limit: 1,
        type: 'artist',
        country: 'US'
    };

    return getFromApi('search', query).then(function(response) {
        artist = response.artists.items[0];
        return getFromApi(`artists/${artist.id}/related-artists`, query).then(function(response) {
            artist.related = response.artists;
            var topTracks = artist.related.map(function(relatedArtist) {
                return getFromApi(`artists/${relatedArtist.id}/top-tracks`, query);
            });
        })
        var results = Promise.all(topTracks);
        results.then(function(response) {
            console.log(artist);
            return artist;
        });
    }).catch(function(err) {
        console.log(err);
    });
};








;
// return getFromApi(`artists/${artistID}/related-artists`, query)
//            .then(function(response) {
//                artist.related = response.artists;
//                var topTracks = artist.related.map(function(relArtist) {
//                    let quer = {
//                        country: 'US'
//                    };
//                    return getFromApi(`artists/${relArtist.id}/top-tracks`, quer)
//                        .then(function(response) {
//                            console.log(response);
//                        });
//                });
//                return Promise.all(topTracks)
//                    .then(function(response) {
//                    return artist;
//                    });
//            });
//        };



// var artist;

// var getArtist = function(name) {

//     var query =
//     {
//         q: name,
//         limit: 1,
//         type: 'artist'
//     };

//     return getFromApi('search', query).then(function(response) {
//         artist = response.artists.items[0];
//         var artistID = artist.id;
//         return getFromApi(`artists/${artistID}/related-artists`, query).then(function(response) {
//             artist.related = response.artists;
//             var promiseArray = [];
//             artist.related.map(function(relatedArtist) {
//                 promiseArray.push(fetch(`artists/${relatedArtist.id}/top-tracks`));
//             });
//             allPromise = Promise.all(promiseArray);
//             return allPromise.then(function(response) {
//                 console.log('AllPromise = ' + response);
//             })
//         }); 
//     }).catch(function(err) {
//         console.log(err);
//     });
// };


// // getArtist('Slayer')