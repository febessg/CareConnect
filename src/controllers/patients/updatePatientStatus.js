const Patient = require('../../models/patient');

async function updatePatientStatus(req, res) {
    try {
        const patientInDb = await Patient.findByPk(req.params.identifier);

        if (!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"].includes(req.body.service_status)) {
            return res.status(400).json({message: "O status de serviço deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO"});
        };

        if (!patientInDb) {
            return res.status(404).json({message: "Paciente não encontrado"})
        };

        patientInDb.service_status = req.body.service_status;

        await patientInDb.save();

        res.status(200).json(patientInDb);
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'})
    }
};

module.exports = updatePatientStatus;