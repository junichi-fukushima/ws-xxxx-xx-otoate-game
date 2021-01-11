const express = require('express');
const app = express();
const router = express.Router();
// const Score = require('../models/score');
// const root = require("../front-js/index.html")

app.get('/', function (req, res) {
  res.send('hello world')
})

// router.post('/', async (req,res)=>{
// 	const score = new Score({
// 		name: req.body.name,
// 		score: req.body.score
// 	});

// 	const savedScore = await score.save();
// 	res.json(savedScore);

// });

router.use(express.json());
module.exports = router;