module.exports = mongoose => {
    const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        code: {
            type: String,
            required: true,
            unique: true
        }
    }, { timeseries: true, timestamp: true })
    return mongoose.model('Roles', schema)
};