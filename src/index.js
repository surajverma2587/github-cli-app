const inquirer = require("inquirer");

const { generateActionChoices } = require("./utils/choices");

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

  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

app();
