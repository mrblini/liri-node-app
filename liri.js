


// require("dotenv").config();

var axios = require("axios");

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);




if (process.argv[2] === `concert-this`) {
    console.log("it worked!");
    axios.get("https://rest.bandsintown.com/artists/" + "lady gaga" + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("inside axious")
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
else if (process.argv[2] === `spotify-this-song`) {
    axios.get("https://rest.bandsintown.com/artists/" + "lady gaga" + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("inside axious")
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
else if (process.argv[2] === `movie-this`) {

}
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