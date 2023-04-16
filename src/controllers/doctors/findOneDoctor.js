const Doctor = require('../../models/doctor');

async function findOneDoctor(req, res) {
    try {
        const doctorInDb = await Doctor.findByPk(req.params.identifier);

        if(!doctorInDb) {
            return res.status(404).json({message: 'Médico não encontrado'})
        };

        res.status(200).json(doctorInDb);
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'})
    }    
};

module.exports = findOneDoctor;