const controllers = require('../controllers');
const middleware = require('../middlewares')

module.exports = express => {
    const router = express.Router();
    router.post("/api/v1/roles", middleware.connect, controllers.rolesControllers.create);
    express().use(router);
}