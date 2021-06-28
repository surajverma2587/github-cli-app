const axios = require("axios");

const fetchDataFromGitHub = async (url) => {
  const response = await axios.get(url);

  return response.data;
};

module.exports = {
  fetchDataFromGitHub,
};
