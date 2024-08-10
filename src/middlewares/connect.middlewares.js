module.exports = (req, res, next) => {
    console.log(`${req.method} - / ${req.url} - ${new Date()} request received`);
    next();
}