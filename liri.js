

var inquirer = require("inquirer");

var Twitter = require('twitter');

// var spotify = require('spotify');

// var request = require("request");

// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json", function(error, response, body) {

//   if (!error && response.statusCode === 200) {

//     console.log(body);
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });


var client = new Twitter({
  consumer_key: '4omCcQdo8As8YXuC7yPlxxmE2',
  consumer_secret: 'SMWaaHUlvagxb2pxULiCysM7O4WoJpUV24OJtr6bTF2yyVUXVn',
  access_token_key:   '849146794751787008-zv2s4OsUybxryDMz2PvXoCzB1wCmnIO',
  access_token_secret: 'X5RaPHrLmUWnG8HLxcKNCKx4uylpJgK6NY3uyrUHDnIIy'
});

  // function spotifyIt() {
  //   spotify.search({ type: 'track', query:  }, function(err, data) {
  //   if ( err ) {
  //     console.log('Error occurred: ' + err);
  //         return;  //from spotify npm docs
  //     }
  //   else{
  //     var Result = console.log(songInfo.artists.name)
  //         console.log(songInfo.name)
  //         console.log(songInfo.album.name)
  //         console.log(songInfo.preview_url)
  //         console.log(Result);
  //       };
  //   });

console.log("--------------------------");
console.log("----Matthew's Liri App----");
console.log("--------------------------");

function programStart() {
    inquirer.prompt([
      {
        name: "choose",
        message: "Choose an App:",
        type: "list",
        choices: [
        'Twitter', 'Spotify', 'OMDB', 'Do-This'
        ]
      }]).then(function(answers) {
        var command = answers.choose;
        if (command === 'Twitter') {
          var params = {
            screen_name: 'Jonty17k',
            count: 20
          };
          client.get('statuses/user_timeline', params, function(error, tweet, response) {
            if (!error) {
              //var myJSON = JSON.stringify(tweets);
              console.log(tweet);
            }
          });
        }
        if (command === 'Spotify') {
          spotifyIt();
        }  
        if (command === 'OMDB') {
          
        }
        if (command === 'Do-This') {

        }
      });
      //programStart();
};

programStart();