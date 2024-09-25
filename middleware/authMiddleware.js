const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../controllers/authController').JWT_SECRET;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(403).json({code: 403, message: 'No se recibió ningun token'});
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        console.log(err);
        if(err) {
            switch (err.name) {
                case 'JsonTokenError':
                    return res.status(403).json({code: 403, message: 'Token inválido'});
                case 'TokenExpiredError':
                    return res.status(401).json({code: 401, message: 'Token expirado'});
                default:
                    return res.status(500).json({code: 400, message: 'Error interno del servidor'});
            }        
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;