const connection = require('../database/index');

const Sequelize = require('sequelize');

const Patient = connection.define('patient', {
    identifier: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.ENUM("FEMININO", "MASCULINO")
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone_number: {
        type: Sequelize.STRING
    },
    emergency_contact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    allergies: {
        type: Sequelize.TEXT
    },
    specific_care: {
        type: Sequelize.TEXT
    },
    health_insurance: {
        type: Sequelize.STRING
    },
    service_status: {
        type: Sequelize.ENUM("AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO")
    },
    total_attendances: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Patient;