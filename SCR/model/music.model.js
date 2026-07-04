const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_data",
        required: true
    }    
})

const musicmodel = mongoose.model('musicuser',musicSchema);

module.exports = musicmodel;
