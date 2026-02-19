const multer = require("multer");

const storage = multer.diskStorage({}); // tmp storage in memory

const upload = multer({ storage });

module.exports = upload;

