const teamService = require('../services/teamService');

exports.getTeams = async (req, res) => {
  const teams = await teamService.getAllTeams();
  res.json(teams);
};

exports.getTeamById = async (req, res) => {
  const team = await teamService.getTeamById(req.params.id);
  res.json(team);
};

exports.getTeamsByCountry = async (req, res) => {
  const teams = await teamService.getTeamsByCountry(req.params.countryId);
  res.json(teams);
};

exports.createTeam = async (req, res) => {
  const newTeam = await teamService.createTeam(req.body);
  res.status(201).json(newTeam);
};

exports.updateTeam = async (req, res) => {
  const updated = await teamService.updateTeam(req.params.id, req.body);
  res.json(updated);
};

exports.deleteTeam = async (req, res) => {
  await teamService.deleteTeam(req.params.id);
  res.json({ message: 'Équipe supprimée' });
};
