
$(function() {

$results = $('#results');
$albumArt = $('#albumArt')


$.ajax({
	url: 'https://en.wikipedia.org/w/api.php?action=query&titles=SWV&format=json&prop=extracts&exintro=&indexpageids=&explaintext=&callback=?',
	type: 'GET',
	dataType: 'json',
	success: function(data) {
		console.log(data);
		console.log(data.query.pageids)
		var pageids = data.query.pageids[0];
		console.log(jQuery.type(pageids));
		var extract = data.query.pages[pageids].extract
		$results.append(extract);

	},
	error: function(errorMessage) {
		console.log('not working');
	}
})

$.ajax({
	
      	// var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';

      	url: 'https://api.spotify.com/v1/search?q=SWV&type=artist',
      	method: 'get',
      	success: function(response) {
      		// var artists = response.artists.items;
      		
      		// artists.forEach(function(artistObject) {
      		// 	artistList.append("<li>" + artistObject.name +"</li>")
      		// })
      		console.log(response);
      		var artRep = response.artists.items;
      		console.log(response.artists.items);
      		for (var i = 0; i < artRep.length; i++) {
      			console.log(artRep[i].images);
      			var images = artRep[i].images;
      			var id = artRep[0].id;
      			for (var a=0; a < images.length; a++) {
      				console.log(images[a].url)

      			}
      		}
      	$.ajax({
      		url: 'https://api.spotify.com/v1/artists/' + id + '/albums',
      		method: 'get',
      		success: function(response) {
      			console.log(response);
      			var artistObj = response.items
      			for (var i = 0; i  < artistObj.length; i++) {
      				console.log(artistObj[i].images[1].url)
      				$albumArt.append("<img src='" +artistObj[i].images[1].url +"'>")
      			}
      		},
      		error: function(errorMessage) {
      			console.log('Spotify not working');
      		}
      	})

      	}
      })

});