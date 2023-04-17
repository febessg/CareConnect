const yup = require('yup');

const validation = yup.object().shape({
    doctor_id: yup
    .number('O ID do médico deve ser um número')
    .required('O ID do médico é obrigatório para o registro de atendimento')
    .integer('O ID deve ser um número inteiro')
    .positive('O ID deve ser um número positivo'),
    patient_id: yup
    .number('O ID do paciente deve ser um número')
    .required('O ID do paciente é obrigatório para o registro de atendimento')
    .integer('O ID do paciente deve ser um número inteiro')
    .positive('O ID do paciente deve ser um número positivo')
});

function validateAttendance(req, res, next) {
    try {
        validation.validateSync(req.body)
    } catch (error) {
       return res.status(400).json({message: error.message})
    }
    
    next()
};

module.exports = validateAttendance;