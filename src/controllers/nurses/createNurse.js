const Nurse = require('../../models/nurse');

async function createNurse(req, res) {
    try {
        const data = {
            name: req.body.name,
            sex: req.body.sex,
            date_of_birth: req.body.date_of_birth,
            cpf: req.body.cpf,
            phone_number: req.body.phone_number,
            educational_institution: req.body.educational_institution,
            coren_uf: req.body.coren_uf
        };

        if (!data.name || !data.date_of_birth || !data.cpf || !data.educational_institution || !data.coren_uf) {
            return res
            .status(400)
            .json({message: "Dados obrigatórios não informados"})
        };

        const nurseExists = await Nurse.findOne({
            where: {
                cpf: req.body.cpf
            }
        });

        if (nurseExists) {
            return res
            .status(409)
            .json({message: "Enfermeiro já cadastrado"})
        };

        const nurse = await Nurse.create(data);

        res.status(201).json(nurse);
    } catch (error) {
        return res.status(500).json({message: "Não foi possível processar a solicitação"})
    }
};

module.exports = createNurse;