const dayService = require('../services/dayService');

exports.getDays = async (req, res) => {
  const days = await dayService.getAllDays();
  res.json(days);
};

exports.getDayById = async (req, res) => {
  const day = await dayService.getDayById(req.params.id);
  res.json(day);
};

exports.getDaysByChampionship = async (req, res) => {
  const days = await dayService.getDaysByChampionship(req.params.champId);
  res.json(days);
};

exports.createDay = async (req, res) => {
  const newDay = await dayService.createDay(req.body);
  res.status(201).json(newDay);
};

exports.updateDay = async (req, res) => {
  const updated = await dayService.updateDay(req.params.id, req.body);
  res.json(updated);
};

exports.deleteDay = async (req, res) => {
  await dayService.deleteDay(req.params.id);
  res.json({ message: 'Journée supprimée' });
};
