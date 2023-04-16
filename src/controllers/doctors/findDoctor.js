const Doctor = require("../../models/doctor");

async function findDoctor(req, res) {
    try {
        const filters = req.query;

        if (filters.status) {
            if (!['ATIVO', 'INATIVO'].includes(filters.status)) {
                return res.status(400).json({message: "O status do médico no sistema deve ser ATIVO ou INATIVO"})
            };
            
            const doctors = await Doctor.findAll({
                where: {
                    status: filters.status
                }
            });

            return res.status(200).json(doctors);
        } else {
            const doctors = await Doctor.findAll();
            return res.status(200).json(doctors)
        };
    } catch (error) {
        return res.status(500).json({message: 'Não foi possível processar a sua solicitação'});
    }
    
};

module.exports = findDoctor;