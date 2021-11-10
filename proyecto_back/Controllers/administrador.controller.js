const Administrador = require("../models/administrador.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


exports.login = function(req, res, next){
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Administrador.findOne({administrador: req.body.administrador, pass: hashedpass}, function(err, administrador){
        let response = {
            token: null
        }

        if(administrador !== null){
            response.token = jwt.sign({
                id: administrador._id,
                administrador: administrador.administrador
            }, "__secret__")
        }
        res.json(response);
    })
}