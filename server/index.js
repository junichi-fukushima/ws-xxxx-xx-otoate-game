const express = require('express');
const app = express();
const mongoose = require('mongoose');

// routesディレクトリを使用して表示したいがエラーが出る
// const scoreRouter = require('./routes/Score'); 
// app.use('/', scoreRouter);
// app.use('/score', scoreRouter);

// 使用する静的コンテンツの取得
app.use(express.static('../front-js'))

// ルーティングの設定
app.get('/', function (req, res) {
    res.sendFile('..//front-js/index.html');
})

const port = 3000;

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