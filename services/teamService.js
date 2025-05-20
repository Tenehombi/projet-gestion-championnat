const Team = require('../models/Team');

const getAllTeams = () => Team.find().populate('country');
const getTeamById = (id) => Team.findById(id).populate('country');
const getTeamsByCountry = (countryId) => Team.find({ country: countryId }).populate('country');
const createTeam = (data) => Team.create(data);
const updateTeam = (id, data) => Team.findByIdAndUpdate(id, data, { new: true });
const deleteTeam = (id) => Team.findByIdAndDelete(id);

module.exports = {
  getAllTeams,
  getTeamById,
  getTeamsByCountry,
  createTeam,
  updateTeam,
  deleteTeam
};
