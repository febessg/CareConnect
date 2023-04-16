const connection = require('../database/index');

const Sequelize = require('sequelize');

const Doctor = connection.define('doctor', {
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
    educational_institution: {
        type: Sequelize.STRING,
        allowNull: false
    },
    crm_uf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    clinical_specialization: {
        type: Sequelize.ENUM("CLINICO_GERAL", "ANESTESISTA", "DERMATOLOGIA", "GINECOLOGIA", "NEUROLOGIA", "PEDIATRIA", "PSIQUIATRIA", "ORTOPEDIA")
    },
    status: {
        type: Sequelize.ENUM("ATIVO", "INATIVO"),
        defaultValue: 'ATIVO'
    },
    total_attendances: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Doctor;