const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    let token;
    if (req.header('Authorization')) {
        token = req.header('Authorization').replace('Bearer ', '');
    } else if (req.body.token) {
        token = req.body.token;
    } else if (req.query && req.query.token) {
        token = req.query.token;
    }
    if (!token && !token.startsWith('Bearer ')) {
        return res.status(403).send({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.id = decoded._id;
        if (req.params.id != req.id) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        next();
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}