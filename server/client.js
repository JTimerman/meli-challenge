const https = require("https");

function request(url) {
  return new Promise((resolve, reject) => {
    let body = "";

    https
      .get(url, response => {
        response.on("data", chunk => {
          body += chunk;
        });
        response.on("end", () => {
          const json = JSON.parse(body);

          resolve(json);
        });
      })
      .on("error", error => console.log(error));
  });
}

exports.search = query => {
  return request(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
};

exports.getItemData = query => {
  return Promise.all([
    request(`https://api.mercadolibre.com/items/${query}`),
    request(`https://api.mercadolibre.com/items/${query}/description`)
  ]);
};
