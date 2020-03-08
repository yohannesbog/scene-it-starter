

document.addEventListener('DOMContentLoaded', () => {

    function renderMovies(movieArray) {

        var movieHTML = movieArray.map((currentMovie) => {
            return `
            <div class="card" style="width: 22rem;">
            <div class="card-body">
             <img  id ="rating" src=${currentMovie.Poster} <span><h5 class="card-title"> ${currentMovie.Title}</h5> </span>   
             <p>${currentMovie.Year}</p>
             <p>${currentMovie.imdbID}</p>
             <p>${currentMovie.Type}</p>
             <button style="background-color:blue;" onclick="saveToWatchList('${currentMovie.imdbID}')"> Add to watch list</button>  
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
/// add ability to search 
        var searchString = document.getElementById('search-bar').value;

        var urlEncodedSearchString = encodeURIComponent(searchString);
         axios.get('http://www.omdbapi.com/?apikey=4367f1ab&s=' + urlEncodedSearchString)
         .then(function(response){
             console.log(response.data)
             movieHTML = renderMovies(response.data.Search);
             return moviescontaienr.innerHTML = renderMovies(response.data.Search)

         })
    });



});
function saveToWatchList(imdbID) {
    var movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie)
    
        
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    

}



