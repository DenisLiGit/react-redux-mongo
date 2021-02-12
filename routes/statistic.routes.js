const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const Film = require('../models/Film')
const Game = require('../models/Game')
const Serial = require('../models/Ser')
const Statistic = require('../models/Statistic')
const jwtValidation = require('./../auth/Auth')

router.get(
    '/',
    jwtValidation,
    async (req, res) => {
        try {
            const booksCount = await Book.find().countDocuments()
            const filmsCount = await Film.find().countDocuments()
            const gamesCount = await Game.find().countDocuments()
            const serialsCount = await Serial.find().countDocuments()
            const recent = await Statistic.findOne({id: 1})

            res.json({booksCount, filmsCount, gamesCount, serialsCount, recent})
        } catch (e) {
            res.status(500).json({ 'message': e.message })
        }
    })

module.exports = router