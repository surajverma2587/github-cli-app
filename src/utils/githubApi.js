const { fetchDataFromGitHub } = require("./fetchers");
const { transformUserInfo } = require("./transformations");

const displayUserInfo = async (username) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/users/${username}`
  );

  const result = transformUserInfo(dataFromGitHubApi);

  console.table(result);
};

module.exports = {
  displayUserInfo,
};
