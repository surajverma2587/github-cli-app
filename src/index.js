const inquirer = require("inquirer");

const { generateActionChoices } = require("./utils/choices");
const {
  displayUserInfo,
  listAllRepositories,
  listAllFollowers,
} = require("./utils/githubApi");

let mainAppInProgress = true;

const app = async () => {
  while (mainAppInProgress) {
    const usernameQuestion = {
      type: "input",
      message: "Enter a GitHub username:",
      name: "username",
      default: "surajverma2587",
    };

    const { username } = await inquirer.prompt(usernameQuestion);

    let promptMainActions = true;

    while (promptMainActions) {
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

      if (action === "differentUsername") {
        promptMainActions = false;
      }

      if (action === "exit") {
        mainAppInProgress = false;
        promptMainActions = false;
      }
    }
  }

  console.log(
    `🚀 Thank you using the GitHub CLI app \n🚀 Why not take a look at the open source code here https://github.com/surajverma2587/github-cli-app`
  );
};

app();
