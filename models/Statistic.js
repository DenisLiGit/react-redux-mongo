const {model, Schema} = require('mongoose')

const schema = new Schema({
    id: {type: Number},
    recentBook: {type: Number},
    recentFilm: {type: Number},
    recentSerial: {type: Number},
    recentGame: {type: Number}
})

module.exports = model('Statistic', schema)