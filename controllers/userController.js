const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../services/userServices');

exports.getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

exports.getUserByEmail = async (req, res) => {
  const user = await userService.getUserByEmail(req.params.email);
  res.json(user);
};

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userService.createUser({ firstName, lastName, email, password: hashedPassword });

  // Générer un token JWT
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.status(201).json({ user: newUser, token });
};

exports.updateUser = async (req, res) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'Utilisateur supprimé' });
};
