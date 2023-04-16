const Patient = require('../../models/patient');

async function deletePatient(req, res) {
try {
    const patientInDb = await Patient.findByPk(req.params.identifier);

    if (!patientInDb) {
        return res.status(404).json({message: "Paciente não encontrado"})
    };

    await Patient.destroy({
        where: {
            identifier: req.params.identifier
        }
    });

    res.status(204).json({message: 'Dados deletados com sucesso'});
} catch (error) {
    return res.status(500).json({message: 'Não foi possível processar a sua solicitação'})
}
};

module.exports = deletePatient;