const gameService = require('../services/gameService');

exports.getGames = async (req, res) => {
  const games = await gameService.getAllGames();
  res.json(games);
};

exports.getGameById = async (req, res) => {
  const game = await gameService.getGameById(req.params.id);
  res.json(game);
};

exports.getGamesByDay = async (req, res) => {
  const games = await gameService.getGamesByDay(req.params.dayId);
  res.json(games);
};

exports.createGame = async (req, res) => {
  const newGame = await gameService.createGame(req.body);
  res.status(201).json(newGame);
};

exports.updateGame = async (req, res) => {
  const updated = await gameService.updateGame(req.params.id, req.body);
  res.json(updated);
};

exports.deleteGame = async (req, res) => {
  await gameService.deleteGame(req.params.id);
  res.json({ message: 'Match supprimé' });
};
