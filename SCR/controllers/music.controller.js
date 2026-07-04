const musicmodel = require("../model/music.model");
const jwt = require("jsonwebtoken");
const { uploadfile } = require("../services/storage.service");


async function createmusic(req, res) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized1"
        })
    };

    try {
        decoded = jwt.verify(token, process.env.JWT_KEY);
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "user is not eligible for music creation",
            })
        }
    }        

    catch (error) {
        console.log(error);

        return res.status(401).json({
            message: "Unauthorized2"
        })
    }    



        const { title } = req.body;
        const file = req.file;
        const result = await uploadfile(file.buffer.toString('base64'));

        const artistupload = await musicmodel.create({
            title,
            uri: result.url,
            artist: decoded.id
        })

        res.status(200).json({
            message: "music uploaded successfully",
            artistupload
        })
}

module.exports = { createmusic };