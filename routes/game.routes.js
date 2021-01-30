const express = require('express')
const router = express.Router()
const Game = require('../models/Game')

router.get(
'/',
async (req, res) => {
    const page = req.query.page
    const limitPerPage = 7
    const startIndex = (page - 1) * limitPerPage

    try {
        const games = await Game.find().limit(limitPerPage).skip(startIndex).exec()
        const pageCount = Math.ceil(await Game.find().countDocuments().exec() / limitPerPage)

        res.json({games, pageCount})
    } catch (e) {
        res.status(500).json({ 'message': e.message })
    }
})

module.exports = router