
require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify)
var omdbApi = require('omdb-client');


            
// --------------------------------------- CONCERT
if (process.argv[2] === `concert-this`) {
    var artistName = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
        function (response) {
            var resp = response.data[0];

            console.log(resp.venue.city);
            console.log(resp.venue.name);

            var fecha = moment(resp.datetime).format("MM/DD/YYYY");
            console.log(fecha);

        },
        function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    );
}



// --------------------------------------- SPOTIFY
else if (process.argv[2] === `spotify-this-song`) {
    var songName = process.argv[3];
    spotify.search({ type: 'track', query: songName, limit: 1 })
        .then(function (response) {
            console.log(response.tracks.items[0].artists[0].name);
            console.log(response.tracks.items[0].name);
            console.log(response.tracks.items[0].preview_url);
            console.log(response.tracks.items[0].album.name);
        })
        .catch(function (err) {
            console.log(err);
        });
}


// --------------------------------------- MOVIE
else if (process.argv[2] === `movie-this`) {
    var movieName = process.argv[3];
    // axios.get("http://www.omdbapi.com/?apikey=trilogy&" + "frozen" + "").then(
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log(response.data);
        },
        function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    );
}


// --------------------------------------- DO WHAT IT SAYS
else if (process.argv[2] === `do-what-it-says`) {

}









    // ______________________________________________________________________
    // API(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    //  * Name of the venue

    // * Venue location

    //     * Date of the Event(use moment to format this as "MM/DD/YYYY")


    // * This will show the following information about the song in your terminal / bash window

    //     * Artist(s)

    //     * The song's name

    //         * A preview link of the song from Spotify

    //             * The album that the song is from


    // * If no song is provided then your program will default to "The Sign" by Ace of Base.


    //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr.Nobody.'