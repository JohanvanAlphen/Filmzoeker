const radioBtns = document.getElementsByName("film-filter");
const resetBtn = document.getElementById("reset");
const searchBar = document.getElementById("searchbar");
const movieList = document.getElementById("movie-list");

const addMoviesToDom = (movieSelection) => {
    const movieListLi = movieSelection.map(movie => {
        const newLi = document.createElement("li");
        const newA = document.createElement("a");
        const newImage = document.createElement("img");
        newLi.appendChild(newA);
        newA.appendChild(newImage);
        const moviePoster = movie.Poster;
        const posterId = movie.imdbID;
        newA.setAttribute("href", "https://www.imdb.com/title/" + posterId);
        newImage.src = moviePoster;
        return newLi;
    });
    movieListLi.forEach(movieSelection => {
        movieList.appendChild(movieSelection);
    });
};
addMoviesToDom(movies);

function addEventListeners() {

    radioBtns.forEach(radio => {
        radio.addEventListener("change", (event) => {
            handleOnChangeEvent(event.target.id);
        });
    });
    resetBtn.addEventListener("click", () => {
        reset();
        searchBar.value = "";
        addMoviesToDom(movies);
    });
    searchBar.addEventListener("keyup", (event) => {
        handleOnChangeEvent(event.target.value.toLowerCase());
    });
}
addEventListeners();

const handleOnChangeEvent = (event) => {
    let filteredMovies = movies
    switch (event) {
        case "X-Men":
        case "Avengers":
        case "Princess":
        case "Batman":
            filteredMovies = movies.filter(movie => movie.Title.includes(event));
            break;
        case "newestMovies":
            filteredMovies = movies.filter(movie => movie.Year > 2013);
            break;
        case "allMovies":
            addMoviesToDom(movies);
            break;
        default:
            filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(event));
    };
    reset();
    addMoviesToDom(filteredMovies);
};

const reset = () => {
    movieList.innerHTML = "";
}
