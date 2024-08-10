const authMiddleware = require('./auth.middlewares');
const connectMiddleware = require('./connect.middlewares');
const corsMiddleware = require('./cors.middlewares');
const uploadsMiddleware = require('./uploads.middleware');

module.exports = {
    auth: authMiddleware,
    connect: connectMiddleware,
    cors: corsMiddleware,
    uploads: uploadsMiddleware
}