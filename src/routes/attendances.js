const Router = require('express');

const validateToken = require('../middlewares/validateToken');
const validateAttendance = require('../middlewares/validateAttendance');

const createAttendance = require('../controllers/attendances/createAttendance');


const attendancesRoutes = new Router();

attendancesRoutes.post('/api/atendimentos', validateToken, validateAttendance, createAttendance);

module.exports = attendancesRoutes;