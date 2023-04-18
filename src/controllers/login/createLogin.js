const Doctor = require('../../models/doctor');
const Nurse = require('../../models/nurse');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createLogin(req, res) {
    try {
        const doctorInDb = await Doctor.findOne({
            where: {
                cpf: req.body.cpf
            }
        });

        const nurseInDb = await Nurse.findOne({
            where: {
                cpf: req.body.cpf
            }
        });

        if (!doctorInDb && !nurseInDb) {
            return res
            .status(401)
            .json({message: 'Usuário ou senha incorreto'})
        };

        const userInDb = doctorInDb || nurseInDb;

        const hash = await bcrypt.hash(process.env.SENHA_SISTEMA, 10)

        const passwordIsValid = await bcrypt.compare(req.body.password, hash);

        if (!passwordIsValid) {
            return res
            .status(401)
            .json({message: 'Usuário ou senha incorreto'})
        };

        const token = jwt.sign(
            {
                id: userInDb.identifier
            },
            process.env.CHAVE_DO_TOKEN,
            {
                expiresIn: '1h'
            }
        );

        res.status(200).json({name: userInDb.name, token: token});
    } catch (error) {
        res.status(500).json({message: 'Não conseguimos processar sua solicitação'});
    }
};

module.exports = createLogin;
