const Router = require('express');

const validateNurse = require('../middlewares/validateNurse');

const createNurse = require('../controllers/nurses/createNurse');
const updateNurse = require('../controllers/nurses/updateNurse');
const findNurse = require('../controllers/nurses/findNurse');
const findOneNurse = require('../controllers/nurses/findOneNurse');
const deleteNurse = require('../controllers/nurses/deleteNurse');

const nursesRoutes = new Router();

nursesRoutes.post('/api/enfermeiros', validateNurse, createNurse);
nursesRoutes.put('/api/enfermeiros/:identifier', validateNurse, updateNurse);
nursesRoutes.get('/api/enfermeiros', findNurse);
nursesRoutes.get('/api/enfermeiros/:identifier', findOneNurse);
nursesRoutes.delete('/api/enfermeiros/:identifier', deleteNurse);

module.exports = nursesRoutes;