const express = require("express");
const router = express.Router();
const estudiantesController=require("../Controllers/estudiantes.controller");

router.post("/", estudiantesController.create)//crear
router.get("/", estudiantesController.find)//listar 
router.get("/:id", estudiantesController.findOne)//buscar
router.put("/:id", estudiantesController.update)//actualizar
router.delete("/:id", estudiantesController.remove)//borrar

module.exports = router 



