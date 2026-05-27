const mongoose = require("mongoose");

const contenedorSchema = new mongoose.Schema({
    tipo: { type: String },
    lat: { type: Number },
    lng: { type: Number },
    direccion: { type: String },
    horario: { type: String },
    codigoPostal: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Contenedor", contenedorSchema, "contenedores");