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