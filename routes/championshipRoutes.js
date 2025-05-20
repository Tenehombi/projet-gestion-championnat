const express = require('express');
const router = express.Router();
const championshipController = require('../controllers/championshipController');

router.get('/', championshipController.getChampionships);
router.get('/:id', championshipController.getChampionshipById);
router.post('/', championshipController.createChampionship);
router.put('/:id', championshipController.updateChampionship);
router.delete('/:id', championshipController.deleteChampionship);

module.exports = router;
