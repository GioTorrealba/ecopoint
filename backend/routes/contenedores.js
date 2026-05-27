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

// Buscar residuo simple
router.get("/buscar-residuo", async (req, res) => {
  try {
    res.json([
      {
        nombre: "Botella",
        contenedor: "Verde",
        consejos: "Vacíala antes de reciclarla"
      }
    ]);
  } catch (error) {
    res.status(500).json({ error: "Error buscando residuo" });
  }
});

module.exports = router;