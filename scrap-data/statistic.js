const Statistic = require('../models/Statistic')

const setStatistic = async function() {
    try {
        const stat = await Statistic.findOne({id: 1})
        if (stat) {
            stat.deleteOne()
        }

        const newStat = new Statistic({
            id: 1,
            recentBook: 0,
            recentFilm: 0,
            recentSerial: 0,
            recentGame: 0
        })
        await newStat.save()
    } catch(e) { }
}

module.exports = setStatistic
