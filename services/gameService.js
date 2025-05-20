const Game = require('../models/Game');

const getAllGames = () => Game.find().populate('idTeam1 idTeam2 idDay');
const getGameById = (id) => Game.findById(id).populate('idTeam1 idTeam2 idDay');
const getGamesByDay = (dayId) => Game.find({ idDay: dayId }).populate('idTeam1 idTeam2 idDay');
const createGame = (data) => Game.create(data);
const updateGame = (id, data) => Game.findByIdAndUpdate(id, data, { new: true });
const deleteGame = (id) => Game.findByIdAndDelete(id);

module.exports = {
  getAllGames,
  getGameById,
  getGamesByDay,
  createGame,
  updateGame,
  deleteGame
};

