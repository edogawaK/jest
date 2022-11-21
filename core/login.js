const axios = require("axios");

const login = (email, password) => {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return axios
      .post("http://localhost:8000/api/auth/signin", { email, password })
      .then((response) => {
        return response.data.status;
      })
      .catch((error) => error.response);
  }
  return 0;
};
module.exports = login;
