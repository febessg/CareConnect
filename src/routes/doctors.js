const Router = require('express');

const validateDoctor = require('../middlewares/validateDoctor');

const createDoctor = require('../controllers/doctors/createDoctor');
const updateDoctor = require('../controllers/doctors/updateDoctor');
const updateDoctorStatus = require('../controllers/doctors/updateDoctorStatus');
const findDoctor = require('../controllers/doctors/findDoctor');
const findOneDoctor = require('../controllers/doctors/findOneDoctor');
const deleteDoctor = require('../controllers/doctors/deleteDoctor');

const doctorsRoutes = new Router();

doctorsRoutes.post('/api/medicos', validateDoctor, createDoctor);
doctorsRoutes.put('/api/medicos/:identifier', validateDoctor, updateDoctor);
doctorsRoutes.put('/api/medicos/:identifier/status', updateDoctorStatus);
doctorsRoutes.get('/api/medicos', findDoctor);
doctorsRoutes.get('/api/medicos/:identifier', findOneDoctor);
doctorsRoutes.delete('/api/medicos/:identifier', deleteDoctor);

module.exports = doctorsRoutes;