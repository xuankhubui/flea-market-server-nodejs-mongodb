const dbConfig = require('../config/db.config');
const roles = require('./roles.models');
const users = require('./users.models');

module.exports = {
    database: dbConfig.database,
    connect: dbConfig.connect,
    roles: roles(dbConfig.database),
    users: users(dbConfig.database)
}