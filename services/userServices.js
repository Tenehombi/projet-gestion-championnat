const User = require('../models/user');

const getAllUsers = () => User.find();
const getUserById = (id) => User.findById(id);
const getUserByEmail = (email) => User.findOne({ email });
const createUser = (userData) => User.create(userData);
const updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new: true });
const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};
