const { fetchDataFromGitHub } = require("./fetchers");
const {
  transformUserInfo,
  transformRepositories,
  transformUserFollowers,
  transformRepository,
} = require("./transformations");

const displayUserInfo = async (username) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/users/${username}`
  );

  const result = transformUserInfo(dataFromGitHubApi);

  console.log(result);
};

const listAllRepositories = async (username, params) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/users/${username}/repos`,
    params
  );

  const result = transformRepositories(dataFromGitHubApi);

  console.log(result);
};

const listAllFollowers = async (username) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/users/${username}/followers`
  );

  const result = transformUserFollowers(dataFromGitHubApi);

  console.log(result);
};

const listRepository = async (username, repoName) => {
  const dataFromGitHubApi = await fetchDataFromGitHub(
    `https://api.github.com/repos/${username}/${repoName}`
  );

  const result = transformRepository(dataFromGitHubApi);

  console.log(result);
};

module.exports = {
  displayUserInfo,
  listAllRepositories,
  listAllFollowers,
  listRepository,
};
