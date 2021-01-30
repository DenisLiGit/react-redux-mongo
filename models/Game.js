const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    link: {type: String, required: true}
})

module.exports = model('Game', schema)