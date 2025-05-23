const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logo: { type: String }
});

module.exports = mongoose.model('Country', countrySchema);
