document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem("watchlist");

    function renderWatchList(watchlists) {

        var movieList = watchlists.map((saved) => {
            return `
            <div class="card" style="width: 22rem;">
            <div class="card-body">
             <img  src="${saved.Poster}" <span><h5 class="card-title"> ${saved.Title}</h5> </span>   
             <p>${saved.Year}</p>
             <p>${saved.imdbID}</p>
             <p>${saved.Type}</p>
            </div>
           </div>
            `;
        }).join('');

        return movieList
    }
    var wathclistcontaienr = document.getElementById('watch-list')

    //  this loads the the content
    wathclistcontaienr.innerHTML = renderWatchList(JSON.parse(localStorage.getItem('watchlist')));



})

