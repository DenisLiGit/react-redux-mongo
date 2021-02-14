const setBook = require('./scrap-data/scrap-book')
const setFilm = require('./scrap-data/scrap-films')
const setSerial = require('./scrap-data/scrap-serials')
const setGame = require('./scrap-data/scrap-games')
const setStatistic = require('./scrap-data/statistic')

const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cron = require("node-cron")
const path = require("path")

const app = express()

const PORT = config.get('port') || 5000

app.use(express.json({extended: true}))

app.use('/api/books', require('./routes/book.routes'))
app.use('/api/films', require('./routes/film.routes'))
app.use('/api/serials', require('./routes/serial.routes'))
app.use('/api/games', require('./routes/game.routes'))
app.use('/api/favorites', require('./routes/favorite.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/statistic', require('./routes/statistic.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

cron.schedule("* 6 * * *", () => {
    setStatistic()
    setBook()
    setFilm()
    setSerial()
    setGame()
})

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

start()




