const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/', gameController.getGames);
router.get('/:id', gameController.getGameById);
router.get('/day/:dayId', gameController.getGamesByDay);
router.post('/', gameController.createGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router;
