const mongoose = require('mongoose')

//schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

//export
module.exports = mongoose.model("author", authorSchema)