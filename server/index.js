const express = require("express");
const cors = require("cors");
const services = require("./services");

const server = express();

server.use(cors());

server.get("/api/items", (req, res) => {
  services.getItems(req.query.q).then(items => res.json(items));
});

server.get("/api/items/:id", (req, res) => {
  services
    .getItemDetail(req.params.id)
    .then(item => res.json(item))
    .catch(error => res.status(error.status).send(error));
});

server.listen(9000, () => {
  console.log("Server started in port 9000");
});
