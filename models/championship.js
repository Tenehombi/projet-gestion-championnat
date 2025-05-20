const mongoose = require('mongoose');

const championshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  wonPoint: { type: Number, required: true },
  lostPoint: { type: Number, required: true },
  drawPoint: { type: Number, required: true },
  typeRanking: { type: String, required: true }
});

module.exports = mongoose.model('Championship', championshipSchema);
