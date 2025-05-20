const countryService = require('../services/countryService');

exports.getCountries = async (req, res) => {
  const countries = await countryService.getAllCountries();
  res.json(countries);
};

exports.getCountryById = async (req, res) => {
  const country = await countryService.getCountryById(req.params.id);
  res.json(country);
};

exports.createCountry = async (req, res) => {
  const newCountry = await countryService.createCountry(req.body);
  res.status(201).json(newCountry);
};

exports.updateCountry = async (req, res) => {
  const updated = await countryService.updateCountry(req.params.id, req.body);
  res.json(updated);
};

exports.deleteCountry = async (req, res) => {
  await countryService.deleteCountry(req.params.id);
  res.json({ message: 'Pays supprimé' });
};
