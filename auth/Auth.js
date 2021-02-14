const jwt = require('jsonwebtoken')
const config = require('config')

const jwtValidation = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send('Ошибка получения токена')
    } else {
        jwt.verify(token, config.get("jwtSecretKey"), (err, decoded) => {
            if (err) {
                res.json({ "auth": false, "message": "Ошибка аутентификации"})
            } else {
                next()
            }
        })
    }
}

module.exports = jwtValidation