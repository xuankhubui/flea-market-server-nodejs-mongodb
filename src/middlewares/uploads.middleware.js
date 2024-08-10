const multer = require('multer');

// setup storage for upload files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
// setup upload options
const upload = multer({ storage: storage });

module.exports = upload;