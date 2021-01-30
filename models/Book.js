const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    cycle: {type: String},
    author: {type: String},
    genre: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String}
})

module.exports = model('Book', schema)