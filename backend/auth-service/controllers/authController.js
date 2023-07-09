const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

async function registerUser(req, res) {
  const { username, password, role } = req.body;

  try {
    const user = await User.create({ username, password, role });
    res.json({ message: 'User registered successfully.', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ error: 'Invalid username or password.' });
    } else {
      const isMatch = await user.comparePassword(password);
      if (isMatch) {
        const token = jwt.sign({ id: user._id }, config.jwtSecret, {
          expiresIn: '1h',
        });
        res.header('authorization', `Bearer ${token}`).json({
          message: 'Logged in successfully.',
          user,
          token,
        });
      } else {
        res.status(400).json({ error: 'Invalid username or password.' });
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

function logoutUser(req, res) {
  res.json({ message: 'Logged out successfully.' });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
