// const apiKey = "&api_key=9b1f4294dc69899b53d0488dd477261f";
// const apiBaseUrl = "https://api.themoviedb.org/3/";
// const searchMovieUrl = apiBaseUrl + "search/movie?query=";
const searchBox = document.querySelector(".search");
const searchButton = document.querySelector(".searchButton");
const titleLink = document.querySelector(".movieTitle");

// const titleClick = document.querySelector(".movieTitle");

// async function getMovie(titleName) {
//   const response = await fetch(searchMovieUrl + titleName + apiKey);
//   if (response.status == 404) {
//     document.querySelector(".error").style.display = "block";
//   } else {
//     var data = await response.json();
//     let imageUrl = "https://image.tmdb.org/t/p/w500";

//     document.querySelector(".thumbnailImage").src =
//       imageUrl + data.results[0].poster_path;
//     document.querySelector(".movieTitle").innerHTML = data.results[0].title;
//     console.log(data);
//   }
// }

// titleClick.addEventListener("click", () => {
//   console.log("it worked");
//   document.querySelector(".suggestionContainer").style.display = "none";
//   document.querySelector(".container").style.display = "block";
// });

const url =
  "https://movie-database-alternative.p.rapidapi.com/?r=json&page=1&s=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "39c04dde24msha40ce152b806433p1d63acjsn90604b3b80cd",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getMovie(searchBox.value);
});

async function getMovie(title) {
  try {
    const response = await fetch(url + title, options);
    const result = await response.json();

    showMovies(result.Search);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function showMovies(result) {
  document.querySelector(".main").innerHTML = "";
  result.forEach((movie) => {
    const { Title, Poster, imdbID } = movie;
    const movieCard = document.createElement("div");
    movieCard.classList.add("suggestionContainer");
    // document.querySelector(".thumbnailImage").src = result.Search[0].Poster;
    // document.querySelector(".movieTitle").innerHTML = result.Search[0].Title;
    if (Poster === "N/A") {
      return;
    } else {
      movieCard.innerHTML = `<img src="${Poster}" class="thumbnailImage" />
    <div class="movieDetails">
      <p class="movieTitle">${Title}</p>
    </div>`;

      document.querySelector(".main").appendChild(movieCard);
    }
  });
}

function getMovieInfo(ID) {
  titleLink.addEventListener("click", () => {
    console.log("click");
  });
}
