const championshipService = require('../services/championshipService');

exports.getChampionships = async (req, res) => {
  const championships = await championshipService.getAllChampionships();
  res.json(championships);
};

exports.getChampionshipById = async (req, res) => {
  const championship = await championshipService.getChampionshipById(req.params.id);
  res.json(championship);
};

exports.createChampionship = async (req, res) => {
  const newChamp = await championshipService.createChampionship(req.body);
  res.status(201).json(newChamp);
};

exports.updateChampionship = async (req, res) => {
  const updated = await championshipService.updateChampionship(req.params.id, req.body);
  res.json(updated);
};

exports.deleteChampionship = async (req, res) => {
  await championshipService.deleteChampionship(req.params.id);
  res.json({ message: 'Championnat supprimé' });
};
