const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const token = req.header('auth-token')

    if(!token) return res.status(401).json({
        error: "Acceso no autorizado"
    })

    try {
        const verified = jwt.verify(token, "sdfghjklkjhg")//reemplazar por .env

        const RolesDicctionary={
            "administrador":"chain",
            "centro_medico":"center" //falta los otros usuarios
        };

        req.user = verified 
        
        console.log(req.originalUrl.indexOf(RolesDicctionary[verified.roles]))

        if(req.originalUrl.indexOf(RolesDicctionary[verified.roles]) === 0){
            return res.status(403).json({error:"Acceso no autorizado"})
        } 

        next()
    }catch(error){
        res.status(400).json({
            error: "Token no valido, Inicia sesion"
        })
    }

}

module.exports = verifyToken