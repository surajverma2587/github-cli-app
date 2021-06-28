const axios = require("axios");

const fetchDataFromGitHub = async (url, params) => {
  const response = await axios.get(url, {
    params,
  });

  return response.data;
};

module.exports = {
  fetchDataFromGitHub,
};
