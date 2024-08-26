const multer = require('multer')
const path  = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        const timestamp = new Date().getTime();
        const filename = file.originalname;
        // const extension = path.extname(file.originalname);
        callback(null, `${timestamp}_${filename}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        // ini 3 MB
        fileSize: 3 * 1000 * 1000
    }
});

module.exports = upload;