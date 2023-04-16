const connection = require('../database/index');

const Sequelize = require('sequelize');

const Nurse = connection.define('nurse', {
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
    coren_uf: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Nurse;