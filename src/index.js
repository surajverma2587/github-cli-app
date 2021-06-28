const inquirer = require("inquirer");

const { generateActionChoices } = require("./utils/choices");
const { displayUserInfo } = require("./utils/githubApi");

const app = async () => {
  const questions = [
    {
      type: "input",
      message: "Enter a GitHub username:",
      name: "username",
    },
    {
      type: "list",
      message: "Select an action:",
      choices: generateActionChoices,
      name: "action",
    },
  ];

  const { username, action } = await inquirer.prompt(questions);

  if (action === "getUserInfo") {
    await displayUserInfo(username);
  }
};

app();
