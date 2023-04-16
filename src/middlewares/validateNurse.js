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
    coren_uf: yup
    .string()
});

function validateNurse(req, res, next) {
    try {
        validation.validateSync(req.body)
    } catch (error) {
       return res.status(400).json({message: error.message})
    }
    
    next()
};

module.exports = validateNurse;