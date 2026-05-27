const express = require("express");
const router = express.Router();

router.get("/buscar", async (req, res) => {
  res.json([{ mensaje: "ruta funcionando" }]);
});

router.get("/buscar-residuo", async (req, res) => {
  res.json([{ mensaje: "buscar residuo funcionando" }]);
});

module.exports = router;