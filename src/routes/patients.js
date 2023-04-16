const Router = require('express');

const validatePatient = require('../middlewares/validatePatient');

const createPatient = require('../controllers/patients/createPatient');
const updatePatient = require('../controllers/patients/updatePatient');
const updatePatientStatus = require('../controllers/patients/updatePatientStatus');
const findPatient = require('../controllers/patients/findPatient');
const findOnePatient = require('../controllers/patients/findOnePatient');
const deletePatient = require('../controllers/patients/deletePatient');

const patientsRoutes = new Router();

patientsRoutes.post('/api/pacientes', validatePatient, createPatient);

patientsRoutes.put('/api/pacientes/:identifier', validatePatient, updatePatient);

patientsRoutes.put('/api/pacientes/:identifier/status', updatePatientStatus);

patientsRoutes.get('/api/pacientes', findPatient);

patientsRoutes.get('/api/pacientes/:identifier', findOnePatient);

patientsRoutes.delete('/api/pacientes/:identifier', deletePatient);

module.exports = patientsRoutes;