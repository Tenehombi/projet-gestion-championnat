const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
  number: { type: String, required: true },
  idChampionship: { type: mongoose.Schema.Types.ObjectId, ref: 'Championship', required: true }
});

module.exports = mongoose.model('Day', daySchema);
