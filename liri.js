
require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var omdbApi = require('omdb-client');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify)


            
// --------------------------------------- CONCERT - ARTIST
if (process.argv[2] === `concert-this`) {
    var artistName = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
        function (response) {
            var resp = response.data[0];

            console.log("---> venue city: " + resp.venue.city);
            console.log("---> venue name: " + resp.venue.name);

            var fecha = moment(resp.datetime).format("MM/DD/YYYY");
            console.log("---> Date of event: " + fecha);
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




// --------------------------------------- SPOTIFY - SONG
else if (process.argv[2] === `spotify-this-song`) {
    if (process.argv[3]) {
        var songName = process.argv[3];
        spotify.search({ type: 'track', query: songName, limit: 1 })
            .then(function (response) {
                var resp = response.tracks.items[0];
                console.log("---> Artist name: " + resp.artists[0].name);
                console.log("---> Song name: " + resp.name);
                console.log("---> Preview URL: " + resp.preview_url);
                console.log("---> Album name: " + resp.album.name);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    else {
        spotify.search({ type: 'track', query: "The Sign", limit: 1 })
            .then(function (response) {
                var resp = response.tracks.items[0];
                console.log("---> Artist name: " + resp.artists[0].name);
                console.log("---> Song name: " + resp.name);
                console.log("---> Preview URL: " + resp.preview_url);
                console.log("---> Album name: " + resp.album.name);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}


// --------------------------------------- MOVIE
else if (process.argv[2] === `movie-this`) {
    var movieName = process.argv[3];
    if (process.argv[3]) {
        axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            var resp = response.data;
            console.log("---> Movie Title: " + resp.Title);
            console.log("---> Movie year: " + resp.Year);
            console.log("---> IMDB rating: " + resp.Ratings[0].Value);
            console.log("---> Roten Tomatoe rating: " + resp.Ratings[1].Value);
            console.log("---> Country: " + resp.Country);
            console.log("---> Language: " + resp.Language);
            console.log("---> Actors: " + resp.Actors);
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

    else {
        axios.get("http://www.omdbapi.com/?t=" + "Mr.Nobody." + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                var resp = response.data;
                console.log("---> Movie Title: " + resp.Title);
                console.log("---> Movie year: " + resp.Year);
                console.log("---> IMDB rating: " + resp.Ratings[0].Value);
                console.log("---> Roten Tomatoe rating: " + resp.Ratings[1].Value);
                console.log("---> Country: " + resp.Country);
                console.log("---> Language: " + resp.Language);
                console.log("---> Actors: " + resp.Actors);
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
}


// --------------------------------------- DO WHAT IT SAYS
else if (process.argv[2] === `do-what-it-says`) {
    
}

