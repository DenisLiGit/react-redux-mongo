const {Schema, model} = require('mongoose')

const schema = new Schema({
    id: [{type: String}],
    userId: {type: String},
}, { versionKey: '_favv'})

module.exports = model('Favorite', schema)