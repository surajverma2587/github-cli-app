const { fetchDataFromGitHub } = require("./fetchers");
const {
  transformUserInfo,
  transformRepositories,
} = require("./transformations");

const displayUserInfo = async (username) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/users/${username}`
  );

  const result = transformUserInfo(dataFromGitHubApi);

  console.table(result);
};

const listAllRepositories = async (username) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/users/${username}/repos`
  );

  const result = transformRepositories(dataFromGitHubApi);

  console.log(result);
};

module.exports = {
  displayUserInfo,
  listAllRepositories,
};
