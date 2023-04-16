const Nurse = require('../../models/nurse');

async function deleteNurse(req, res) {
    try {
        const nurseInDb = await Nurse.findByPk(req.params.identifier);

        if (!nurseInDb) {
            return res.status(404).json({message: 'Enfermeiro não encontrado'})
        };

        await Nurse.destroy({
            where: {
                identifier: req.params.identifier
            }
        });

        return res.status(204).json({message: 'Dados deletados com sucesso'});
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'});
   }
};

module.exports = deleteNurse;