

document.addEventListener('DOMContentLoaded', () => {

    function renderMovies(movieArray) {

        var movieHTML = movieArray.map((currentMovie) => {
            return `
            <div class="card" style="width: 22rem;">
            <div class="card-body">
             <img  src=${currentMovie.Poster} <span><h5 class="card-title"> ${currentMovie.Title}</h5> </span>   
             <p>${currentMovie.Year}</p>
             <p>${currentMovie.imdbID}</p>
             <p>${currentMovie.Type}</p>
             <button style="background-color:blue;" onclick="saveToWatchList(${currentMovie.imdbID})"> Add to watch list</button>  
            </div>
           </div>
            `;
        }).join('');

        return movieHTML
    }
    var moviescontaienr = document.getElementById('movie-cont')

    //  this loads the the content
    // moviescontaienr.innerHTML = renderMovies(movieData);

    //this loads the content when search clicked
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        return moviescontaienr.innerHTML = renderMovies(movieData)
    });

    function saveToWatchList(imdbID) {
        var movie = movieData.find(function (currentMovie) {
            return currentMovie.imdbID == imdbID;
        });

        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = []
        } else {
            watchlist.push(movie);
            
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
        }

        // return saveToWatchList(movieData)
    }


});


