const mongoose = require('mongoose');
const dbConfig = require('../config/db.config')

module.exports = {
    mongoose: mongoose,
    connect: dbConfig,
}