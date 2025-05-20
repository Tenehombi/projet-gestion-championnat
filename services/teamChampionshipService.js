const TeamChampionship = require('../models/TeamChampionship');

const createRelation = (data) => TeamChampionship.create(data);
const getAllRelations = () => TeamChampionship.find().populate('idTeam idChampionship');

module.exports = {
  createRelation,
  getAllRelations
};