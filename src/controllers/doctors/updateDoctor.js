const Doctor = require('../../models/doctor');

async function updateDoctor(req, res) {
    try {
        const doctorInDb = await Doctor.findByPk(req.params.identifier);

        if (!doctorInDb) {
            return res
            .status(404)
            .json({message: 'Médico não encontrado'})
        };

        doctorInDb.name = req.body.name || doctorInDb.name;
        doctorInDb.sex = req.body.sex || doctorInDb.sex;
        doctorInDb.date_of_birth = req.body.date_of_birth || doctorInDb.date_of_birth;
        doctorInDb.cpf = req.body.cpf || doctorInDb.cpf;
        doctorInDb.phone_number = req.body.phone_number || doctorInDb.phone_number;
        doctorInDb.educational_institution = req.body.educational_institution || doctorInDb.educational_institution;
        doctorInDb.crm_uf = req.body.crm_uf || doctorInDb.crm_uf;
        doctorInDb.clinical_specialization = req.body.clinical_specialization || doctorInDb.clinical_specialization;

        await doctorInDb.save();

        res.status(200).json(doctorInDb);
        
    } catch (error) {
        res.status(500).json({ message: 'Não conseguimos processar a sua solicitação.' })
    }
};

module.exports = updateDoctor;