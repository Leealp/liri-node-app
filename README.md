# liri-node-app
10th Project using Node.js

Links to a snapshots of the app:
https://drive.google.com/file/d/1iPBSdLodwl1VtDL9clCYt9U-E71WxqTa/view?usp=sharing
https://drive.google.com/file/d/0B_jlU6cCbxZ2UlNVempxRUg3YXV0NmlFM2VyTWp2NW5jTEFR/view?usp=sharing
https://drive.google.com/file/d/0B_jlU6cCbxZ2MzM2R1lqU3p2Y3RmX19hUnZFMi1VblNKbVBR/view?usp=sharing
https://drive.google.com/file/d/0B_jlU6cCbxZ2Zk1OYjFiMWNkZEpacGVXd2Z2VXdhSE16QXVJ/view?usp=sharing
https://drive.google.com/file/d/0B_jlU6cCbxZ2STNlYVF3S090UXl5aFEzUlBmRk05R01sZzVR/view?usp=sharing

this node application called LIRI, works like the iPhone's SIRI except that it doesn't have a Speech Interpretation and Recognition Interface. 
It is a command line node app that takes in parameters and gives back data to the user.

How does LIRI work?
It is very simple. From the command line run the liri.js file as you would any other Node.js and provide it with any of the following commands then a search term as noted below:

Commands & Filter:

a) node liri.js concert-this '<artist/band name here>'

	This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

	Name of the venue
	Venue location
	Date of the Event (use moment to format this as "MM/DD/YYYY")


b) node liri.js spotify-this-song '<song name here>'

	This will show the following information about the song in the terminal/bash window

	Artist(s)
	The song's name
	A preview link of the song from Spotify
	The album that the song is from

	If no song is provided then your program will default to "The Sign" by Ace of Base.


c) node liri.js movie-this '<movie name here>'

	This will output the following information to your terminal/bash window:

   	* Title of the movie.
   	* Year the movie came out.
   	* IMDB Rating of the movie.
   	* Rotten Tomatoes Rating of the movie.
   	* Country where the movie was produced.
   	* Language of the movie.
   	* Plot of the movie.
   	* Actors in the movie.

	If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


d) node liri.js '<do-what-it-says>'

	Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

	It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.




