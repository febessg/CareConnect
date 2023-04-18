const Router = require('express');

const validateToken = require('../middlewares/validateToken');
const validatePatient = require('../middlewares/validatePatient');

const createPatient = require('../controllers/patients/createPatient');
const updatePatient = require('../controllers/patients/updatePatient');
const updatePatientStatus = require('../controllers/patients/updatePatientStatus');
const findPatient = require('../controllers/patients/findPatient');
const findOnePatient = require('../controllers/patients/findOnePatient');
const deletePatient = require('../controllers/patients/deletePatient');

const patientsRoutes = new Router();

patientsRoutes.post('/api/pacientes', validateToken, validatePatient, createPatient);

patientsRoutes.put('/api/pacientes/:identifier', validateToken, validatePatient, updatePatient);

patientsRoutes.put('/api/pacientes/:identifier/status', validateToken, updatePatientStatus);

patientsRoutes.get('/api/pacientes', validateToken, findPatient);

patientsRoutes.get('/api/pacientes/:identifier', validateToken, findOnePatient);

patientsRoutes.delete('/api/pacientes/:identifier', validateToken, deletePatient);

module.exports = patientsRoutes;