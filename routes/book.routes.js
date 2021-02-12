const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const jwtValidation = require('./../auth/Auth')

router.get(
'/',
jwtValidation,
async (req, res) => {
    const page = parseInt(req.query.page)
    const limitPerPage = 7
    const startIndex = (page - 1) * limitPerPage

    try {
        const books = await Book.find().limit(limitPerPage).skip(startIndex).exec()
        const pageCount = Math.ceil(await Book.find().countDocuments().exec() / limitPerPage)

        res.json({books, pageCount})
    } catch (e) {
        res.status(500).json({ 'message': e.message })
    }
})

module.exports = router