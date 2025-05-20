const mongoose = require('mongoose');

const teamChampionshipSchema = new mongoose.Schema({
  idTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  idChampionship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Championship',
    required: true
  }
});

module.exports = mongoose.model('TeamChampionship', teamChampionshipSchema);