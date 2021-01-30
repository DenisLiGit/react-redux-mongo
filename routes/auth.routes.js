const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
'/register',
[
    check('email', 'email error w').isEmail(),
    check('password', 'password error q').isLength({min: 6})
],
async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'eorror'
            })
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: 'user already exist'})
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashPassword})
        await user.save()

        res.status(201).json({message: 'user created'})

    } catch (e) {
        res.status(500).json({ message: 'error custom'})
    }
})


// /api/auth/login
router.post(
'/login',
[
    check('email', 'set email proprly').normalizeEmail().isEmail(),
    check('password', 'set pass').exists()
],
async (req, res) => {
    try {
    const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'error login'
            })
        }

        const {email, password} = req.body
        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({message: 'nor exist user'})
        }

        const passMatch = await bcrypt.compare(password, user.password)

        if(!passMatch) {
            return res.status(400).json({message: 'pass not correct'})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get("jwtSecretKey"),
            { expiresIn: '1h' }
        )

        res.json({ token, userId: user.id })
    } catch (e) {
        res.status(500).json({ message: 'error custom'})
    }
})

module.exports = router