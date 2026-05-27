const express = require("express");
const router = express.Router();

router.get("/buscar", (req, res) => {
  res.json([{ ok: true }]);
});

router.get("/buscar-residuo", (req, res) => {
  res.json([{ ok: true }]);
});

module.exports = router;