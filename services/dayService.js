const Day = require('../models/Day');

const getAllDays = () => Day.find().populate('idChampionship');
const getDayById = (id) => Day.findById(id).populate('idChampionship');
const getDaysByChampionship = (champId) => Day.find({ idChampionship: champId }).populate('idChampionship');
const createDay = (data) => Day.create(data);
const updateDay = (id, data) => Day.findByIdAndUpdate(id, data, { new: true });
const deleteDay = (id) => Day.findByIdAndDelete(id);

module.exports = {
  getAllDays,
  getDayById,
  getDaysByChampionship,
  createDay,
  updateDay,
  deleteDay
};
