const { generateActionChoices } = require("./choices");

test("should return a list of choices with the username", () => {
  const expected = [
    {
      name: "Display information about foobar",
      value: "getUserInfo",
      short: "get user info",
    },
    {
      name: "List all repositories for foobar",
      value: "getAllRepos",
      short: "get repos",
    },
    {
      name: "List 10 recently created repositories for foobar",
      value: "getRecentlyCreatedRepos",
      short: "recently created repos",
    },
    {
      name: "List 10 recently updated repositories for foobar",
      value: "getRecentlyUpdatedRepos",
      short: "recently updated repos",
    },
    {
      name: "List all followers of foobar",
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

  const actual = generateActionChoices({ username: "foobar" });

  expect(actual).toEqual(expected);
});
