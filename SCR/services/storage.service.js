const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_KEY,
});

async function uploadfile(file){
    const result = await imagekit.files.upload({
        file,
        fileName : "music_"+ Date.now(),
        folder : "spotify/music"
    })

    return result;
}


module.exports = { uploadfile };
