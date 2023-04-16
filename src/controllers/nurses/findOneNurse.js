const Nurse = require('../../models/nurse');

async function findOneNurse(req, res) {
    try {
        const nurseInDb = await Nurse.findByPk(req.params.identifier);

        if (!nurseInDb) {
            return res.status(404).json({message: 'Enfermeiro não encontrado'})
        };

        return res.status(200).json(nurseInDb);
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'});
   }
};

module.exports = findOneNurse;