// スキーマの定義
const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
  name: String,
  score: Number
});

module.exports = mongoose.model('Score', ScoreSchema);