const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

console.log("1. Inicio server");

const app = express();

app.use(cors());
app.use(express.json());

console.log("2. Middlewares OK");

console.log("3. MONGO_URI:", process.env.MONGO_URI ? "EXISTE" : "NO EXISTE");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("4. Mongo conectado");

    app.get("/", (req, res) => {
        res.send("Servidor funcionando");
    });

    console.log("5. Rutas base OK");

    const usuariosRoutes = require("./routes/user.js");
    console.log("6. users OK");

    app.use("/api/usuarios", usuariosRoutes);

    const recogidasRoutes = require("./routes/recogidas.js");
    console.log("7. recogidas OK");

    app.use("/api/recogidas", recogidasRoutes);

    const puntosRoutes = require("./routes/puntosLimpios.js");
    console.log("8. puntos OK");

    app.use("/api/puntos-limpios", puntosRoutes);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`9. Servidor escuchando en puerto ${PORT}`);
    });
})
.catch(err => {
    console.error("ERROR MONGO:", err);
});