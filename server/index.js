const express = require("express");
const cors = require("cors");
const https = require("https");

const server = express();

server.use(cors());

server.get("/api/items", (req, res) => {
  let body = "";

  https
    .get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`,
      response => {
        response.on("data", chunk => {
          body += chunk;
        });
        response.on("end", () => {
          const json = JSON.parse(body);
          res.json(json);
        });
      }
    )
    .on("error", error => console.log(error));
});

server.get("api/items/:id", (req, res) => {
  const item = new Promise((resolve, reject) => {
    let body = "";

    https
      .get(
        `https://api.mercadolibre.com/items/${req.params.id}/description`,
        response => {
          response.on("data", chunk => {
            body += chunk;
          });
          response.on("end", () => {
            const json = JSON.parse(body);
            resolve(json);
          });
        }
      )
      .on("error", error => reject(error));
  });

  const description = new Promise((resolve, reject) => {
    let body = "";

    https
      .get(
        `https://api.mercadolibre.com/items/${req.params.id}/description`,
        response => {
          response.on("data", chunk => {
            body += chunk;
          });
          response.on("end", () => {
            const json = JSON.parse(body);
            resolve(json);
          });
        }
      )
      .on("error", error => reject(error));
  });

  Promise.all([item, description])
    .then(responses => {
      const item = responses[0];
      const description = responses[1];
      const body = {
        item,
        description
      };

      res.json(body);
    })
    .catch(error => console.log(error));
});

server.listen(9000);
