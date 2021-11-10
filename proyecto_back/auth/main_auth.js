/* const jwt = require("jsonwebtoken")
const auth = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "__secret__")
        req.usuario = decoded
        next()
    }catch(error){
            res.status(401)
            //console.log (error)
            res.json({code: 4, msg: "no tiene permisos para acceder"})
    }
}
module.exports = auth  */