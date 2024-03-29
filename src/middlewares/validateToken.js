const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token || token === 'Bearer ') {
        return res.status(403).json({message: 'Token ausente'})
    };

    const tokenJwt = token.slice(7);

    jwt.verify(tokenJwt, process.env.CHAVE_DO_TOKEN, (error, decoded) => {
        if (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({message: 'Token Expirado'})
            } else if (error.name === "JsonWebTokenError") {
                return res.status(401).json({message: 'Token inválido'})
            } else {
                return res.status(500).json({message: 'Internal server error'})
            }
        } else {
            req.body.userId = decoded.id
            return next()
        }
    })
};

module.exports = validateToken;