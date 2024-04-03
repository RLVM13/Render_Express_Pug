/* {
"Title": "Guardians of the Galaxy Vol. 2",
"Year": "2017",
"Rated": "PG-13",
"Released": "05 May 2017",
"Runtime": "136 min",
"Genre": "Action, Adventure, Comedy",
"Director": "James Gunn",
"Writer": "James Gunn, Dan Abnett, Andy Lanning",
"Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
"Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.6/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "85%"
},
{
"Source": "Metacritic",
"Value": "67/100"
}
],
"Metascore": "67",
"imdbRating": "7.6",
"imdbVotes": "753,481",
"imdbID": "tt3896198",
"Type": "movie",
"DVD": "10 Jul 2017",
"BoxOffice": "$389,813,101",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
} */

//FUNCION PARA RECIBIR PRODUCTOS
const fetchFilm = async (titulo = "") => { //PARAMETRO OPCIONAL
    let response = await fetch(`https://www.omdbapi.com/?t=${titulo}&apikey=97e101b7`); //{} o [{},{},{},{}]
    let data = await response.json(); //{} o [{},{},{},{}]
    return data;
}

module.exports = fetchFilm;

//Probarlo en consola  node public/js/fetch.js
//fetchFilm("Superman").then(data=>console.log(data));