const inquirer = require("inquirer");

const { generateActionChoices } = require("./utils/choices");
const {
  displayUserInfo,
  listAllRepositories,
  listAllFollowers,
} = require("./utils/githubApi");

let mainAppInProgress = true;

const app = async () => {
  const usernameQuestion = {
    type: "input",
    message: "Enter a GitHub username:",
    name: "username",
    default: "surajverma2587",
  };

  const { username } = await inquirer.prompt(usernameQuestion);

  while (mainAppInProgress) {
    const actionQuestion = {
      type: "list",
      message: "Select an action:",
      choices: generateActionChoices(username),
      name: "action",
    };

    const { action } = await inquirer.prompt(actionQuestion);

    if (action === "getUserInfo") {
      await displayUserInfo(username);
    }

    if (action === "getAllRepos") {
      await listAllRepositories(username);
    }

    if (action === "getRecentlyCreatedRepos") {
      await listAllRepositories(username, {
        sort: "created",
        per_page: 10,
      });
    }

    if (action === "getRecentlyUpdatedRepos") {
      await listAllRepositories(username, {
        sort: "updated",
        per_page: 10,
      });
    }

    if (action === "getFollowers") {
      await listAllFollowers(username);
    }

    if (action === "exit") {
      mainAppInProgress = false;
    }
  }

  console.log("END");
};

app();
