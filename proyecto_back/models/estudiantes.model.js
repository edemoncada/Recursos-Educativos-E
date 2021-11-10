const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EstudiantesSchema= new Schema({
    nombre:{type: String, required: true, max:40},
    apellido_p:{type: String, required: true, max:40},
    apellido_m:{type: String, required: false, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    nacionalidad:{type: String, required: false, max:40}
});

module.exports = mongoose.model("estudiantes", EstudiantesSchema);


