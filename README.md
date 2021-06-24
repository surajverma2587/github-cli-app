# GitHub Challenge

Build a CLI tool to interact with GitHub API and provide the user with a list of actions to perform for a given GitHub username and/or repository using the terminal.

## User Stories

### User Story 1

```
AS a user
WHEN I start the CLI application
THEN I am presented with a question to "Enter a GitHub username:"
AND WHEN I enter a valid GitHub Username
THEN I am presented with the choices shown below
```

```
Enter a GitHub Username: <user_name>
Select an action:
- Display information about <user_name>
- List all repositories for <user_name>
- List 10 recently created repositories for <user_name>
- List 10 recently updated repositories for <user_name>
- List all followers of <user_name>
- Find a repository by name
- Enter a different username
- Exit
```

### User Story 2

```
AS a user
WHEN I select the option of "Display information about <user_name>"
THEN I am presented with the information for the user as shown below
```

```json
{
  "type": "User",
  "name": "some name",
  "bio": "some bio",
  "company": "some company",
  "location": "some location",
  "username": "<user_name>",
  "profileUrl": "some_url",
  "public_repos": 10,
  "followers": 20,
  "following": 30,
  "created": "Mar 1st, 2017",
  "updated": "Jun 25th, 2020"
}
```

### User Story 3

```
AS a user
WHEN I select the option of "List all repositories for <user_name>"
THEN I am presented with the list of all repositories for the user as shown below
```

```json
[
  {
    "name": "repo_name",
    "private": false,
    "repoUrl": "some_url",
    "username": "<user_name>",
    "profileUrl": "some_url",
    "description": null,
    "created": "Mar 1st, 2017",
    "updated": "Jun 25th, 2020",
    "pushed": "Jun 14th, 2020",
    "homepage": null,
    "issues": 0,
    "license": null,
    "default_branch": "master"
  }...
]
```

### User Story 4

```
AS a user
WHEN I select the option of "List 10 recently created repositories for <user_name>"
THEN I am presented with the list of 10 repositories ordered by last created for the user as shown below
```

```json
[
  {
    "name": "repo_name",
    "private": false,
    "repoUrl": "some_url",
    "username": "<user_name>",
    "profileUrl": "some_url",
    "description": null,
    "created": "Mar 1st, 2017",
    "updated": "Jun 25th, 2020",
    "pushed": "Jun 14th, 2020",
    "homepage": null,
    "issues": 0,
    "license": null,
    "default_branch": "master"
  }...
]
```

### User Story 5

```
AS a user
WHEN I select the option of "List 10 recently updated repositories for <user_name>"
THEN I am presented with the list of 10 repositories ordered by last updated for the user as shown below
```

```json
[
  {
    "name": "repo_name",
    "private": false,
    "repoUrl": "some_url",
    "username": "<user_name>",
    "profileUrl": "some_url",
    "description": null,
    "created": "Mar 1st, 2017",
    "updated": "Jun 25th, 2020",
    "pushed": "Jun 14th, 2020",
    "homepage": null,
    "issues": 0,
    "license": null,
    "default_branch": "master"
  }...
]
```

### User Story 6

```
AS a user
WHEN I select the option of "List all followers of <user_name>"
THEN I am presented with the list of all followers for the user as shown below
```

```json
[
  {
    "type": "User",
    "name": "some name",
    "bio": "some bio",
    "company": "some company",
    "location": "some location",
    "username": "<user_name>",
    "profileUrl": "some_url",
    "public_repos": 10,
    "followers": 20,
    "following": 30,
    "created": "Mar 1st, 2017",
    "updated": "Jun 25th, 2020"
  }...
]
```

### User Story 7

```
AS a user
WHEN I select the option of "Enter a different username"
THEN I should be taken back to the first question "Enter a GitHub username:"
```

### User Story 8

```
AS a user
WHEN I select the option of "Exit the app"
THEN I should exit the app with a message presented as shown below
```

```
🚀 Thank you using the GitHub CLI app
🚀 Why not take a look at the open source code here <link_to_repo> 
```

### User Story 9

```
AS a user
WHEN I select the option of "Find a repository by name"
THEN I am prompted with 2 choices "Select a repository from a list" and "Enter repository name"
AND WHEN I select the choice "Select a repository from a list for <user_name>"
THEN I should see a list of repository names to select from
OR WHEN I select the choice "Enter repository name for <user_name>"
THEN I should be able to enter a repository name
```

```
Enter a GitHub Username: <user_name>
Select an action: Find a repository by name
How would you like to proceed?
- Select a repository from a list for <user_name>
- Enter repository name for <user_name>
- Go back to main options
```

**Select Choice 1**

```
Enter a GitHub Username: <user_name>
Select an action: Find a repository by name
How would you like to proceed? Select a repository from a list for <user_name>
Select the repository:
- Repo Name 1
- Repo Name 2
- Go back to previous options
...
```

```
Enter a GitHub Username: <user_name>
Select an action: Find a repository by name
How would you like to proceed? Select a repository from a list for <user_name>
Select the repository: Repo 2
...
```

**Select Choice 2**

```
Enter a GitHub Username: <user_name>
Select an action: Find a repository by name
How would you like to proceed? Enter repository name for <user_name>
Enter the name of the repository: Repo 2
```

```json
{
  "name": "repo_name",
  "private": false,
  "repoUrl": "some_url",
  "username": "<user_name>",
  "profileUrl": "some_url",
  "description": null,
  "created": "Mar 1st, 2017",
  "updated": "Jun 25th, 2020",
  "pushed": "Jun 14th, 2020",
  "homepage": null,
  "issues": 0,
  "license": null,
  "default_branch": "master"
}
```

**Select Choice 3**

```
Enter a GitHub Username: <user_name>
Select an action: Find a repository by name
How would you like to proceed? Go back to previous options
Select an action:
- Display information about <user_name>
- List all repositories for <user_name>
- List 10 recently created repositories for <user_name>
- List 10 recently updated repositories for <user_name>
- List all followers of <user_name>
- Find a repository by name
- Enter a different username
```

### User Story 10

```
AS a user
WHEN I select the choice "Enter repository name for <user_name>"
AND WHEN I enter a repository name that is not present
THEN I should be presented with an message "Repository <incorrect_repo_name> not found!"
AND THEN I should go back to the previous options as shown below
```

```
How would you like to proceed?
- Select a repository from a list for <user_name>
- Enter repository name for <user_name>
- Go back to main options
```

### User Story 11

```
AS a user
WHEN I view the information about a repository
THEN I am prompted with a confirm "Would you like to view more options for the repository <repo_name>?"
AND WHEN I confirm Yes
THEN I am presented with a list of choices shown below
```

```
Would you like to view more options for the repository <repo_name>? Yes
Select an action:
- List all branches for <repo_name>
- List 10 recent commits for <repo_name>
- View the README file for <repo_name>
- Go back to previous options
```

### User Story 12

```
AS a user
WHEN I view the information about a repository
AND WHEN I confirm No
THEN I am presented with the same choices to select an action for a repository as shown below
```

```
Would you like to view more options for the repository <repo_name>? No
Select an action: Find a repository by name
How would you like to proceed?
- Select a repository from a list for <user_name>
- Enter repository name for <user_name>
- Go back to main options
```

### User Story 13

```
AS a user
WHEN I select the option "List all branches for <repo_name>"
THEN I am presented with the information about all the branches for a repository as shown below
```

```json
[
  {
    "name": "branch 1",
    "url": "some_url",
    "protected": true
  },
  {
    "name": "branch 2",
    "url": "some_url",
    "protected": false
  }
]
```

### User Story 14

```
AS a user
WHEN I select the option "List 10 recent commits for <repo_name>"
THEN I am presented with the information about 10 recent commits for a repository as shown below
```

```json
[
  {
    "sha": "dbf0945cf29540727e00995f23633a7f5c6b0b8b",
    "message": "refactor code",
    "url": "some_url",
    "committer": {
      "name": "Suraj Verma",
      "email": "surajverma@rentalcars.com",
      "date": "24th Jun, 2020",
      "avatar_url": "some_url",
      "username": "surajverma2587"
    }
  } ...
]
```

### User Story 15

```
AS a user
WHEN I select the option "View the README file for <repo_name>"
THEN I am presented with the link to the README file as shown below
```

```
Click on <readme_url> to view <file_name>
```

### User Story 16

```
AS a user
WHEN I select the option "Go back to previous options"
THEN I am presented with choices as shown below
```

```
How would you like to proceed?
- Select a repository from a list for <user_name>
- Enter repository name for <user_name>
- Go back to main options
```