const mongoose = require('mongoose');

module.exports = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to mongodb!");
    }).catch((error) => {
        console.log(`error connecting to mongodb: ${error}`);
        process.exit();
    })
}