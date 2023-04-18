const Router = require('express');

const validateToken = require('../middlewares/validateToken');
const validateDoctor = require('../middlewares/validateDoctor');

const createDoctor = require('../controllers/doctors/createDoctor');
const updateDoctor = require('../controllers/doctors/updateDoctor');
const updateDoctorStatus = require('../controllers/doctors/updateDoctorStatus');
const findDoctor = require('../controllers/doctors/findDoctor');
const findOneDoctor = require('../controllers/doctors/findOneDoctor');
const deleteDoctor = require('../controllers/doctors/deleteDoctor');


const doctorsRoutes = new Router();

doctorsRoutes.post('/api/medicos', validateToken, validateDoctor, createDoctor);
doctorsRoutes.put('/api/medicos/:identifier', validateToken, validateDoctor, updateDoctor);
doctorsRoutes.put('/api/medicos/:identifier/status', validateToken, updateDoctorStatus);
doctorsRoutes.get('/api/medicos',validateToken, findDoctor);
doctorsRoutes.get('/api/medicos/:identifier', validateToken, findOneDoctor);
doctorsRoutes.delete('/api/medicos/:identifier', validateToken, deleteDoctor);

module.exports = doctorsRoutes;