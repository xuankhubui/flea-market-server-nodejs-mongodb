const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const MODEL = require('../models');

//create access token
const access = user => {
    return jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN, {expiresIn: process.env.EXPIRES_ACCESS});
}
//create refresh token
const refresh = user => {
    return jwt.sign({_id: user._id}, process.env.REFRESH_TOKEN, {expiresIn: process.env.EXPIRES_REFRESH});
}

module.exports = {
    //register account
    async register(req, res) {
        let body = req.body;
        let passwordValidation =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        let emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (body.password !== body.confirmPassword) {
            return res.status(401).send({message: 'Password do not match'});
        }
    }
}