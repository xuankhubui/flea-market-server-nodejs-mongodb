const dbConfig = require('../config/db.config')

module.exports = {
    database: dbConfig.database,
    connect: dbConfig.connect,
}