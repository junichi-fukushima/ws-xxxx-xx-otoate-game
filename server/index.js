const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const { Score } = require('./models')


const port = 3000


const scorePath = '/scores'

// CORS許可
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const options = {
	useUnifiedTopology : true,
	useNewUrlParser : true
}

mongoose.connect('mongodb://127.0.0.1/score_db',options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connection successful'));

app.listen(port, 
	() => console.log(`Example app listening on port ${port}!`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

