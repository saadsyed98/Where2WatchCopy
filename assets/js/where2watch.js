 $(document).ready(() => {
//	console.log("we're active")
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	}); 
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com?s='+ searchText+'&apikey=thewdb') 
	.then(response => {
		console.log(response);
		let movies = response.data.Search;
		let output = '';
		$.each(movies, (index, movie) => {
			output += `
			<div class = "col-md-3">
			<div class = "well text-center">
			<h3> ${movie.Title}</h3>
			<img src = "${movie.Poster}"> 
			<a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">
			<br> Click Here for Details </a>
			`;
		});
		
		$('#movies').html(output);
	})
	.catch(err => {
		console.error(err);
	});
}	

function movieSelected(id) {
	sessionStorage.setItem("movieId", id);
	window.location= 'movie.html';
	return false;
}	

function getMovie() {
	let movieId = sessionStorage.getItem('movieId');

	axios.get('http://www.omdbapi.com?i='+ movieId+'&apikey=thewdb') 
	.then(response => {
		console.log(response);
		let movie = response.data;
		let output =`
			<div class="row">
			<div class="col-md-4">
				<img src="${movie.Poster}" class="thumbnail">
			</div>
			<div class="twelve columns">
				<h2>${movie.Title}</h2>
				<ul class="list-group">
				<li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
				<li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
				<li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
				<li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
				<li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
				<li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
				<li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
			</div
		</div
		<div class="row'>
			<div class="well">
			<h3>Plot</h3>
			${movie.Plot}
			<hr>
			<a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
			<br>
			<a href="/index.html" class="btn btn-default">Go Back To Search</a>
			
		`;
		$('#movie').html(output);
	})
	.catch(err => {
		console.error(err);
	});

}



















/*// Utelly API =========================>
fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=tt3398228&source=imdb&country=us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// ========================>


// GoWATCH ========================>
fetch("https://gowatch.p.rapidapi.com/lookup/title/imdb_id", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "gowatch.p.rapidapi.com",
		"x-rapidapi-key": "a560eed208mshfe3e8b958f39c50p17b66cjsn4a55ced8d8c5"
	},
	"body": {
		"id": "tt6751668",
		"type": "movie",
		"country": "us"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// ==============================>*/