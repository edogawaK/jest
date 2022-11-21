const axios = require("axios");

const filter = (payload) => {
  return axios
    .get("http://localhost:8000/api/products", { params: payload })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => error.response);
};
module.exports = filter;
