const Router = require('express');

const validateAttendance = require('../middlewares/validateAttendance');

const createAttendance = require('../controllers/attendances/createAttendance');


const attendancesRoutes = new Router();

attendancesRoutes.post('/api/atendimentos', validateAttendance, createAttendance);

module.exports = attendancesRoutes;