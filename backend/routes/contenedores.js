const express = require("express");
const router = express.Router();
const Contenedor = require("../models/Contenedor");

// Buscar todos o filtrar por tipo
router.get("/buscar", async (req, res) => {
  try {
    const { tipo } = req.query;

    let filtro = {};

    if (tipo) {
      filtro.tipo = tipo;
    }

    const contenedores = await Contenedor.find(filtro);

    res.json(contenedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error buscando contenedores" });
  }
});


module.exports = router;