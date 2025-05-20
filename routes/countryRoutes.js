const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// CRUD de base
router.get('/', countryController.getCountries);
router.get('/:id', countryController.getCountryById);
router.post('/', countryController.createCountry);
router.put('/:id', countryController.updateCountry);
router.delete('/:id', countryController.deleteCountry);

module.exports = router;
