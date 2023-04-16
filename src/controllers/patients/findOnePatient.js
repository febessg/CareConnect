const Patient = require('../../models/patient');

async function findOnePatient(req, res) {
    try {
        const patientInDb = await Patient.findByPk(req.params.identifier);

        if (!patientInDb) {
            return res.status(404).json({message: "Paciente não encontrado"})
        };

        res.status(200).json(patientInDb);
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'})
    }
};

module.exports = findOnePatient;