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
        const item = req.body.body

        try {
            let candidate = await Favorite.findOne({userId: item.userId})
            if (candidate) {
                if (!candidate.id.includes(item.id)) {
                    candidate.id.push(item.id)
                    await candidate.save()
                    res.status(201).json({"message": "Сохранено"})
                }
            } else {
                const favorite = new Favorite({...item})
                await favorite.save()
                res.status(201).json({"message": "Сохранено"})
            }
        } catch (e) {
            res.status(500).json({"message": e})
        }
    })

router.post(
    '/deleteFavorite',
    async (req, res) => {
        const itemId = req.body.itemId
        const userId = req.body.userId

        try {
            await Favorite.findOne({userId})
                .updateOne({}, {$pullAll: {id: [itemId]}})
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
            res.status(500).json({"message": e.message})
        }
    })

router.get(
    "/getFavorite",
    async (req, res) => {
        const page = req.query.page
        const userId = req.query.userid
        const limit = 7
        const startIndex = (page - 1) * limit

        try {
            const userFavorites = await Favorite.findOne({userId})
            // console.log(userFavorites)
            if (!userFavorites) {
                return res.json({'message': 'Добавьте избранные карточки'})
            }

            const reverseFavorites = [...userFavorites.id].reverse()
            const allFavorites = await Promise.all(
                reverseFavorites.map(async id => {
                    let filmResponse = await Book.findOne({_id: id}) ||
                        await Film.findOne({_id: id}) ||
                        await Game.findOne({_id: id}) ||
                        await Serial.findOne({_id: id})
                    return filmResponse
                })
            )

            const pageCount = Math.ceil(allFavorites.length / limit)
            const favorites = allFavorites.slice(startIndex, startIndex + limit)
            res.json({favorites, pageCount})
        } catch (e) {
            res.status(500).json({'message': e.message})
        }
    })

module.exports = router