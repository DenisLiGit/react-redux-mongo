const express = require('express')
const router = express.Router()
const Film = require('../models/Film')

router.get(
'/',
async (req, res) => {
    const page = req.query.page
    const limit = 10
    const startIndex = (page - 1) * limit

    try {
        const films = await Film.find().limit(limit).skip(startIndex).exec()
        const pageCount = Math.ceil(await Film.find().countDocuments().exec() / limit)

        res.json({films, pageCount})
    } catch (e) {
        res.status(500).json({ 'message': e.message })
    }
})

module.exports = router