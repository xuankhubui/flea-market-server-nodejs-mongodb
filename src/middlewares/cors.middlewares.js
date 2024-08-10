module.exports = (req, res, next) => {

    // Mọi domain
    res.header("Access-Control-Allow-Origin", "*");

    // Domain nhất định
    // res.header("Access-Control-Allow-Origin", "https://freetuts.net");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}