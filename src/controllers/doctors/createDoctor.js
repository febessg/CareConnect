const Doctor = require('../../models/doctor');

async function createDoctor(req, res) {
    try {
        const data = {
            name: req.body.name,
            sex: req.body.sex,
            date_of_birth: req.body.date_of_birth,
            cpf: req.body.cpf,
            phone_number: req.body.phone_number,
            educational_institution: req.body.educational_institution,
            crm_uf: req.body.crm_uf,
            clinical_specialization: req.body.clinical_specialization,
            status: req.body.status
        };

        if (!data.name || !data.date_of_birth || !data.cpf || !data.educational_institution || !data.crm_uf || !data.clinical_specialization) {
            return res
            .status(400)
            .json({message: "Dados obrigatórios não informados"})
        };

        const doctorExists = await Doctor.findOne({
            where: {
                cpf: req.body.cpf
            }
            });

        if (doctorExists) {
            return res
            .status(409)
            .json({message: "Médico já cadastrado"})
        };

        const doctor = await Doctor.create(data);

        res.status(201).json({data, identificador: doctor.identifier, atendimentos: doctor.total_attendances});

    } catch (error) {
        return res.status(500).json({message: "Não foi possível processar a solicitação"}) 
    }
};

module.exports = createDoctor;