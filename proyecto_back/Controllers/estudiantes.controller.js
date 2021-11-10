const Estudiante = require ("../models/estudiantes.model");
let response = {
    msg: "",
    exito: false
}
//creamos una funcion en nuestro controlador para que haga el llamado para la creacion de un nuevo estudiante
// Crear Estudiante
exports.create = function(req, res){
    let estudiante = new Estudiante({
        nombre:req.body.nombre,
        apellido_p:req.body.apellido_p,
        apellido_m:req.body.apellido_m,
        telefono:req.body.telefono,
        mail:req.body.mail,
        nacionalidad:req.body.nacionalidad
    })
    estudiante.save(function(err){
    if(err){
        console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el estudiante"
        res.json(response)
        return;
    }
    response.exito = true,
    response.msg = "El estudiante se guardó correctamente"
    res.json(response)
})
}
// Listar Estudiantes

exports.find = function(req,res){
    Estudiante.find(function(err, estudiantes){
        res.json(estudiantes)
    })
}

exports.findOne = function(req,res){
    Estudiante.findOne({_id: req.params.id},function(err, estudiante){
        res.json(estudiante)
    })
}

// Modificar Estudiante
exports.update =function(req,res){
    let estudiante = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        nacionalidad: req.body.nacionalidad
    }
    Estudiante.findByIdAndUpdate(req.params.id, {$set: estudiante}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "error al modificar al estudiante"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "el estudiante modifico correctamente"
        res.json(response)
    })
    
}

// Eliminar Estudiante
exports.remove = function(req,res){
    Estudiante.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el estudiante"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Estudiante eliminado correctamente"
        res.json(response)
    })
}