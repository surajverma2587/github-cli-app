const inquirer = require("inquirer");

const { generateActionChoices } = require("./utils/choices");
const {
  displayUserInfo,
  listAllRepositories,
  listAllFollowers,
  listRepository,
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

      if (action === "getRepoByName") {
        const repositoryQuestions = [
          {
            type: "list",
            message: "How would you like to proceed?",
            choices: [
              {
                name: "Select a repository from a list for foobar",
                value: "selectRepoFromList",
                short: "select repo from list",
              },
              {
                name: "Enter repository name for foobar",
                value: "getRepoByName",
                short: "find by repo name",
              },
              {
                name: "Go back to main options",
                value: "backToMainOptions",
                short: "back to main",
              },
            ],
            name: "repoAction",
          },
        ];

        const { repoAction } = await inquirer.prompt(repositoryQuestions);

        if (repoAction === "selectRepoFromList") {
          // go and get repos from git
          // build choices of repos
        }

        if (repoAction === "getRepoByName") {
          const question = {
            type: "input",
            message: `Enter repository name for ${username}`,
            name: "repoName",
          };

          const { repoName } = await inquirer.prompt(question);

          await listRepository(username, repoName);
        }

        if (repoAction === "backToMainOptions") {
          // TODO
        }
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
