const express = require("express");
const multer = require("multer");
const musiccontroller = require("../controllers/music.controller");

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/upload', upload.single("music"), musiccontroller.createmusic);

module.exports = router;
