const Patient = require("../../models/patient");

async function createPatient(req, res) {
    try {
        const data = {
            name: req.body.name,
            sex: req.body.sex,
            date_of_birth: req.body.date_of_birth,
            cpf: req.body.cpf,
            phone_number: req.body.phone_number,
            emergency_contact: req.body.emergency_contact,
            allergies: req.body.allergies,
            specific_care: req.body.specific_care,
            health_insurance: req.body.health_insurance,
            service_status: req.body.service_status
        };

        if (!data.name || !data.date_of_birth || !data.cpf || !data.emergency_contact) {
            return res
            .status(400)
            .json({message: "Dados obrigatórios não informados"})
        };

        const patientExists = await Patient.findOne({
        where: {
            cpf: req.body.cpf
        }
        });

        if (patientExists) {
            return res
            .status(409)
            .json({message: "Paciente já cadastrado"})
        };

        const patient = await Patient.create(data);

        res.status(201).json(patient);

    } catch (error) {
        return res.status(500).json({message: "Não foi possível processar a solicitação"})
    }
};

module.exports = createPatient;