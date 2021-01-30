const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {type: String},
    cycle: {type: String},
    author: {type: String},
    genre: {type: String},
    description: {type: String},
    link: {type: String},
    image: {type: String},
    _id: {type: Number}
}, { versionKey: '_favv'})

module.exports = model('Favorite', schema)