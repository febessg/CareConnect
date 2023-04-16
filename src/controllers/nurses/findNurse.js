const Nurse = require('../../models/nurse');

async function findNurse(req, res) {
    try {
        const nurses = await Nurse.findAll();
        return res.status(200).json(nurses);
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'});
   }
};

module.exports = findNurse;