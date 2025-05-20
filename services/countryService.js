const Country = require('../models/Country');

const getAllCountries = () => Country.find();
const getCountryById = (id) => Country.findById(id);
const createCountry = (data) => Country.create(data);
const updateCountry = (id, data) => Country.findByIdAndUpdate(id, data, { new: true });
const deleteCountry = (id) => Country.findByIdAndDelete(id);

module.exports = {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry
};
