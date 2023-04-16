const Patient = require('../../models/patient');

async function findPatient(req, res) {
    try {
        const filters = req.query;

        if (filters.status) {
           if (!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NAO_ATENDIDO"].includes(filters.status)) {
            return res.status(400).json({message: "O status de serviço deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO"});
        };

            const patients = await Patient.findAll({
            where: {
                service_status: filters.status
            }
        });  
            return res.status(200).json(patients);
        } else {
            const patients = await Patient.findAll();
            return res.status(200).json(patients);
        }

    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'});
    }
};

module.exports = findPatient;