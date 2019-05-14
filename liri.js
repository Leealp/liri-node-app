// required modules
require("dotenv").config();
var fs = require("fs");
var moment = require('moment');
var axios = require("axios");
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

//---------------------------------------------------------------------------------------------------------------------------------------

//pull in required variables
var spotifyTest = process.env.SPOTIFY_ID
let command = process.argv[2]
let searchTerm = process.argv[3]

//---------------------------------------------------------------------------------------------------------------------------------------
//Get the input from the command line


fs.appendFile('log.txt', command + ",", function (err) {
    if (err) throw err;
});

switch (command){
    case "concert-this":  //bands in town
        searchForBandsInTown(searchTerm);
        break;
    case "spotify-this-song":  //spotify
        spotifyThisSong(searchTerm);
        break;
    case "movie-this":  // OMDB for movies
        movieThis(searchTerm);
        break;
    case "do-what-it-says":  //  read commands from a file and excute the commands above
        doRandom();
    break;
}


//------------------------------------------------------------------------------------------------------------------------------------
//search the band in town API and spotify for artists and songs
    
    function searchForBandsInTown(artist) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
            function(response) {
                if(response.data[0].venue !=  undefined) {
                    console.log("Event Veunue: " + response.data[0].venue.name);
                    console.log("Event Location: " + response.data[0].venue.city);
                    var eventDateTime = moment(response.data[0].datetime);
                    console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
                }
                else {
                    console.log("No results found.");
                }
            }
        ).catch(function (error) {
            console.log (error);
      });
    }

    function spotifyThisSong(song) {
        spotify
        .search({ type: 'track', query: song })
        .then(function(response){
            if (response.tracks.total === 0) {
                errorConditionForSpotify();
            } else {
                console.log("Artist: " + response.tracks.items[0].artists[0].name);
                console.log("Track: " + response.tracks.items[0].name);
                console.log("Preview URL: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[0].album.name);
            }
        }).catch(function (error) {  
            console.log(error);
            console.log("No Results found. Showing results for 'The Sign' by Ace of Base");
      });
    }

//---------------------------------------------------------------------------------------------------------------------------------
