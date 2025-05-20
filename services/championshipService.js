const Championship = require('../models/Championship');

const getAllChampionships = () => Championship.find();
const getChampionshipById = (id) => Championship.findById(id);
const createChampionship = (data) => Championship.create(data);
const updateChampionship = (id, data) => Championship.findByIdAndUpdate(id, data, { new: true });
const deleteChampionship = (id) => Championship.findByIdAndDelete(id);

module.exports = {
  getAllChampionships,
  getChampionshipById,
  createChampionship,
  updateChampionship,
  deleteChampionship
};
