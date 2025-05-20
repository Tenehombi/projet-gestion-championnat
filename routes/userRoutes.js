const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Routes publiques
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.get('/email/:email', userController.getUserByEmail);

// Routes protégées par auth si besoin
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;
