const yup = require('yup');

const validation = yup.object().shape({
    name: yup
    .string('O nome deve ser uma string'),
    date_of_birth: yup
    .date('Data de nascimento dever ser no formado AAAA/MM/DD'),
    cpf: yup
    .string()
    .min(11, 'CPF inválido')
    .max(11, 'CPF inválido'),
    phone_number: yup
    .string()
    .min(11, 'O telefone deve ser no formato (XX) XXXXXXXXX')
    .max(14, 'O telefone deve ser no formato (XX) XXXXXXXXX'),
    educational_institution: yup
    .string(),
    crm_uf: yup
    .string(),
    clinical_specialization: yup
    .string()
    .oneOf(["CLINICO_GERAL", "ANESTESISTA", "DERMATOLOGIA", "GINECOLOGIA", "NEUROLOGIA", "PEDIATRIA", "PSIQUIATRIA", "ORTOPEDIA"])
});

function validateDoctor(req, res, next) {
    try {
        validation.validateSync(req.body)
    } catch (error) {
       return res.status(400).json({message: error.message})
    }
    
    next()
};

module.exports = validateDoctor;