const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("FUNCIONA RAILWAY");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor funcionando en puerto", PORT);
});