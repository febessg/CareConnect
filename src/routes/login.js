const Router = require('express');

const createLogin = require('../controllers/login/createLogin');

const loginRoute = new Router();

loginRoute.post('/api/login', createLogin);

module.exports = loginRoute;