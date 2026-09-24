const authService = require('../services/authService');

async function register(req, res, next) {
  try {
    const response = await authService.register(req.body);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const response = await authService.login(req.body);
    res.json(response);
  } catch (err) {
    next(err);
  }
}

async function me(req, res, next) {
  try {
    const user = await authService.me(req.user.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { register, login, me };
