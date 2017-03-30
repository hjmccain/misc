const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var jsonParser = bodyParser.json();

// you shouldn't need to server static since it is served by `npm run dev`
// but keep here for reference
//app.use(express.static('build'));

let fewestGuesses = 6;

app.get('/fewest-guesses', function(req, res) {
    //return fewest guesses
    return res.json(fewestGuesses);
});

app.post('/fewest-guesses', jsonParser, function(req, res) {
    // update fewestGuesses (count) here
    // remember to compare it to the current guesess to determine which is lowest
    console.log(req.body.guess)

    if (!req.body.guess) {
      return res.sendStatus(400);
    }
    if (req.body.guess < fewestGuesses) {
      fewestGuesses = req.body.guess;
      return res.sendStatus(201).json(fewestGuesses);
    }
    else {
      return res.sendStatus(200).json(fewestGuesses);
    }
});

const PORT = 8081;
app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});
