const Router = require('express');

const validateToken = require('../middlewares/validateToken');
const validateNurse = require('../middlewares/validateNurse');

const createNurse = require('../controllers/nurses/createNurse');
const updateNurse = require('../controllers/nurses/updateNurse');
const findNurse = require('../controllers/nurses/findNurse');
const findOneNurse = require('../controllers/nurses/findOneNurse');
const deleteNurse = require('../controllers/nurses/deleteNurse');

const nursesRoutes = new Router();

nursesRoutes.post('/api/enfermeiros', validateToken, validateNurse, createNurse);
nursesRoutes.put('/api/enfermeiros/:identifier', validateToken, validateNurse, updateNurse);
nursesRoutes.get('/api/enfermeiros', validateToken, findNurse);
nursesRoutes.get('/api/enfermeiros/:identifier', validateToken, findOneNurse);
nursesRoutes.delete('/api/enfermeiros/:identifier', validateToken, deleteNurse);

module.exports = nursesRoutes;