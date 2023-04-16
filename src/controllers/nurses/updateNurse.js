const Nurse = require('../../models/nurse');

async function updateNurse(req, res) {
    try {
        const nurseInDb = await Nurse.findByPk(req.params.identifier);

        if (!nurseInDb) {
            return res
            .status(404)
            .json({message: "Enfermeiro não encontrado"})
        };

       nurseInDb.name = req.body.name || nurseInDb.name;
       nurseInDb.sex = req.body.sex || nurseInDb.sex;
       nurseInDb.date_of_birth = req.body.date_of_birth || nurseInDb.date_of_birth;
       nurseInDb.cpf = req.body.cpf || nurseInDb.cpf;
       nurseInDb.phone_number = req.body.phone_number || nurseInDb.phone_number;
       nurseInDb.educational_institution = req.body.educational_institution || nurseInDb.educational_institution;
       nurseInDb.coren_uf = req.body.crm_uf || nurseInDb.coren_uf;

       await nurseInDb.save();

        res.status(200).json(nurseInDb)

    } catch (error) {
        res.status(500).json({ message: 'Não conseguimos processar a sua solicitação.' })
    }
};

module.exports = updateNurse;