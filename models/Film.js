const {model, Schema} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    description: {type: String},
    link: {type: String}
})

module.exports = model('Film', schema)