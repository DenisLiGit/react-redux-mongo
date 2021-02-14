const express = require('express')
const router = express.Router()
const Serial = require('../models/Ser')
const jwtValidation = require('./../auth/Auth')

router.get(
'/',
jwtValidation,
async (req, res) => {
    const page = parseInt(req.query.page)
    const limitPerPage = 7
    const startIndex = (page - 1) * limitPerPage

    try {
        const serials = await Serial.find().limit(limitPerPage).skip(startIndex).exec()
        const pageCount = Math.ceil(await Serial.find().countDocuments().exec() / limitPerPage)

        res.json({serials, pageCount})
    } catch (e) {
        res.status(500).json({ 'message': e.message })
    }
})

module.exports = router