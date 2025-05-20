const express = require('express');
const router = express.Router();
const controller = require('../controllers/teamChampionshipController');

router.post('/', controller.addRelation);
router.get('/', controller.getRelations);

module.exports = router;



