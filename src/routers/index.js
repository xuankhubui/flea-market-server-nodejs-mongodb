const rolesRouter = require('./roles.routers');

module.exports = express => {
    return {
        roles: rolesRouter(express)
    }
}