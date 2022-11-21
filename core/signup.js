const axios = require("axios");

const signup = (payload) => {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.email)) {
    return axios
      .post("http://localhost:8000/api/auth/signup", payload)
      .then((response) => {
        return response.data.status;
      })
      .catch((error) => error.response);
  }
  return 0;
};
module.exports = signup;
