const Doctor = require('../../models/doctor');

async function deleteDoctor(req, res) {
    try {
        const doctorInDb = await Doctor.findByPk(req.params.identifier);

        if (!doctorInDb) {
            return res.status(404).json({message: 'Médico não encontrado'})
        };

        await Doctor.destroy({
            where: {
                identifier: req.params.identifier
            }
        });

        return res.status(204).json({message: 'Dados deletados com sucesso'});
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'})
    }
};

module.exports = deleteDoctor;