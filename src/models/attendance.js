const connection = require('../database/index');

const Sequelize = require('sequelize');

const Doctor = require('./doctor');
const Patient = require('./patient');

const Attendance = connection.define('attendance', {
    identifier: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    patient_id: {
        type: Sequelize.INTEGER
    },
    doctor_id: {
        type: Sequelize.INTEGER
    }
});

Attendance.belongsTo(Doctor, {foreignKey: 'doctor_id'});
Attendance.belongsTo(Patient, {foreignKey: 'patient_id'});

module.exports = Attendance;