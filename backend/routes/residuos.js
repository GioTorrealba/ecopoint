const express = require("express");
const router = express.Router();
const Residuo = require("../models/Residuo");

// GET todos o por nombre
router.get("/", async (req, res) => {
  try {
    const { nombre } = req.query;

    let filtro = {};

    if (nombre) {
      filtro.nombre = new RegExp(nombre, "i");
    }

    const residuos = await Residuo.find(filtro);

    res.json(residuos);
  } catch (error) {
    res.status(500).json({ error: "Error buscando residuos" });
  }
});

module.exports = router;