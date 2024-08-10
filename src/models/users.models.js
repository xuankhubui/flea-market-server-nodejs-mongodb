module.exports = mongoose => {
    const schema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: [3, 'Username must be at least 3 characters long'],
            maxlength: [30, 'Username must be at most 30 characters long'],
        },
        password: {
            type: String,
            required: true,
            unique: true,
            minlength: [8, 'Password must be at least 8 characters long'],
            maxlength: [100, 'Password must be at most 100 characters long'],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        firstName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 30,
        },
        lastName: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 30,
        },
        role: {
            type: mongoose.Types.ObjectId,
            ref: 'Roles',
            required: true,
        },
        refreshToken: {
            type: String,
        }
    }, { timeseries: true, timestamp: true })
    return mongoose.model('Users', schema);
}