const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creationDate: { type: Date, required: true },
  stade: { type: String, required: true },
  logo: { type: String },
  country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true }
});

module.exports = mongoose.model('Team', teamSchema);
