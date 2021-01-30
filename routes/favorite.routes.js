const express = require('express')
const router = express.Router()
const Favorite = require('../models/Favorite')
const Book = require('../models/Book')
const Film = require('../models/Film')
const Game = require('../models/Game')
const Serial = require('../models/Ser')

router.post(
'/setFavorite',
async (req, res) => {
    const item = req.body

    try {
        const id = Math.ceil(Math.random(100) * 1000000)

        let candidate;
        switch (item.type) {
            case 'books':
                candidate = await Book.findOne({_id: item.id})
                break;
            case 'films':
                candidate = await Film.findOne({_id: item.id})
                break;
            case 'serials':
                candidate = await Serial.findOne({_id: item.id})
                break;
            case 'games':
                candidate = await Game.findOne({_id: item.id})
                break;
            default:
                candidate = null
        }
        if (!candidate) {
            return null
        }

        const dupCheck = await Favorite.findOne({title: candidate.title})
        if (dupCheck) {
            return null
        }

        const favorite = new Favorite({...candidate._doc, _id: id+1})
        await favorite.save()

        res.status(201).json({ "message": "new favorite saved" })
    } catch (e) {
        res.status(500).json({ "message": e })
    }
})

router.post(
'/deleteFavorite',
async (req, res) => {
    const itemId = req.body.id

    try {
        await Favorite.deleteOne({_id: itemId})
            .then(
                () => {
                    res.status(200).json({
                        message: 'Deleted!'
                    });
                }
            )
            .catch(error => {
                res.status(400).json({ "message": error })
            })
    } catch (e) {
        res.status(500).json({ "message": e.message })
    }
})

router.get(
"/getFavorite",
async (req, res) => {
    const page = req.query.page
    const limit = 7
    const startIndex = (page - 1) * limit

    try {
        const favorites = await Favorite.find().limit(limit).skip(startIndex).exec()
        const pageCount = Math.ceil(await Favorite.find().countDocuments().exec() / limit)

        res.json({favorites, pageCount})
    } catch (e) {
        res.status(500).json({ 'message': e.message })
    }
})

module.exports = router