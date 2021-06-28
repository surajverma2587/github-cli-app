const generateActionChoices = ({ username }) => {
  return [
    {
      name: `Display information about ${username}`,
      value: "getUserInfo",
      short: "get user info",
    },
    {
      name: `List all repositories for ${username}`,
      value: "getAllRepos",
      short: "get repos",
    },
    {
      name: `List 10 recently created repositories for ${username}`,
      value: "getRecentlyCreatedRepos",
      short: "recently created repos",
    },
    {
      name: `List 10 recently updated repositories for ${username}`,
      value: "getRecentlyUpdatedRepos",
      short: "recently updated repos",
    },
    {
      name: `List all followers of ${username}`,
      value: "getFollowers",
      short: "get followers",
    },
    {
      name: "Find a repository by name",
      value: "getRepoByName",
      short: "find repo",
    },
    {
      name: "Enter a different username",
      value: "differentUsername",
      short: "different repo",
    },
    {
      name: "Exit",
      value: "exit",
      short: "exit",
    },
  ];
};

module.exports = {
  generateActionChoices,
};
