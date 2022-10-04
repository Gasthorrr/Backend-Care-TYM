const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const token = req.header('auth-token')

    if(!token) return res.status(401).json({
        error: "Acceso no autorizado"
    })

    try {
        const verified = jwt.verify(token, "sdfghjklkjhg")//reemplazar por .env

        req.user = verified

        next()
    }catch(error){
        res.status(400).json({
            error: "Token no valido, Inicia sesion"
        })
    }

}

module.exports = verifyToken