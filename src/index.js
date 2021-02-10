// ************* MOVIES **************
const list = document.getElementById("results");
const form = document.getElementById("search-movies");

const searchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?apikey=adf1f2d7&s=${keyword}`;

  list.innerHTML = "";

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const movieHTML = `
          <li class='list-inline-item'>
          <img src='${movie.Poster}' />
          <h2>${movie.Title} (${movie.Year})</h2>
          </li>
        `;

        list.insertAdjacentHTML("beforeend", movieHTML);
      });
    });
};

form.addEventListener('submit', (event) => {
  const input = document.getElementById("keyword");

  event.preventDefault(); // by default, forms try to send info and refresh the page
  searchMovies(input.value); // make the API call with the user input
  input.value = ""; // empty the input
});

// ************* PLACES **************
const searchPlaces = (keyword) => {
  const url = "https://places-dsn.algolia.net/1/places/query";

  // fetch
  // first argument: url
  // second argument: only when using other method than GET, and to send a body
  // -- method: POST / PATCH / DELETE
  // -- body: only with POST and PATCH


  // ------------- JSON is the language to interact with this API
  // ------------- change JS object to a JSON string
  fetch(url, { method: "POST", body: JSON.stringify({ query: 'lon' }) })
    .then(response => response.json()) // change JSON string to a JS object
    .then((data) => { // data is that JS object, looks like this: { hits: [...] }
      console.log(data.hits);

      // turn it into list element
      // insert it on the page
      // same as with movies!
    });
};

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchPlaces);
