const Patient = require('../../models/patient');

async function updatePatient(req, res) {
    try {
        
        const patientInDb = await Patient.findByPk(req.params.identifier);

        if (!patientInDb) {
            return res
            .status(404)
            .json({message: "Paciente não encontrado"})
        };

       patientInDb.name = req.body.name || patientInDb.name;
       patientInDb.sex = req.body.sex || patientInDb.sex;
       patientInDb.date_of_birth = req.body.date_of_birth || patientInDb.date_of_birth;
       patientInDb.cpf = req.body.cpf || patientInDb.cpf;
       patientInDb.phone_number = req.body.phone_number || patientInDb.phone_number;
       patientInDb.emergency_contact = req.body.emergency_contact || patientInDb.emergency_contact;
       patientInDb.allergies = req.body.allergies || patientInDb.allergies;
       patientInDb.especific_care = req.body.especific_care || patientInDb.especific_care;
       patientInDb.health_insurance = req.body.health_insurance || patientInDb.health_insurance;

       await patientInDb.save();

        res.status(200).json(patientInDb)

    } catch (error) {
        res.status(500).json({ message: 'Não conseguimos processar a sua solicitação.' })
    }
};

module.exports = updatePatient;