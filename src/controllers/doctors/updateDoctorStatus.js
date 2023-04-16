const Doctor = require('../../models/doctor');

async function updateDoctorStatus(req, res) {
    try {
        const doctorInDb = await Doctor.findByPk(req.params.identifier);

        if (!['ATIVO', 'INATIVO'].includes(req.body.status)) {
            return res.status(400).json({message: 'O status do médico no sistema deve ser ATIVO ou INATIVO'})
        };

        if (!doctorInDb) {
            return res.status(404).json({message: 'Médico não encontrado'})
        };

        doctorInDb.status = req.body.status;

        await doctorInDb.save();

        res.status(200).json(doctorInDb); 
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'})
    }
    
};

module.exports = updateDoctorStatus;