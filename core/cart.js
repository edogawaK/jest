const axios = require("axios");
const token = "2|k0PS3PLvERGYFwctyDu2ZqU0NjC1hz88laTR710y";

const api = axios.create({
  headers: { Authorization: `Bearer ${token}` },
});

const addToCart = (productId, sizeId, quantity) => {
  const payload = { productId, sizeId, quantity };
  return api
    .post("http://localhost:8000/api/cart", payload)
    .then((response) => {
      return response.data.status;
    })
    .catch((error) => error.response);
};

const updateCart = (id, quantity) => {
  return api
    .put("http://localhost:8000/api/cart/" + id, { quantity })
    .then((response) => {
      return response.data.status;
    })
    .catch((error) => error.response);
};

const removeFromCart = (id) => {
  return api
    .delete("http://localhost:8000/api/cart/" + id)
    .then((response) => {
      return response.data.status;
    })
    .catch((error) => error.response);
};

const cart = {
  updateCart,
  addToCart,
  removeFromCart,
};

module.exports = cart;
