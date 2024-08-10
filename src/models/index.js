const dbConfig = require('../config/db.config');
const roles = require('./roles.models');

module.exports = {
    database: dbConfig.database,
    connect: dbConfig.connect,
    roles: roles(dbConfig.database)
}