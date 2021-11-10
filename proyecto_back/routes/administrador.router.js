const express = require("express")
const router = express.Router()
const administradorController = require("../controllers/administrador.controller")

router.post("/login", administradorController.login)


module.exports = router