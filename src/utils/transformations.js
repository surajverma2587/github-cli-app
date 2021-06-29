const { formatDate } = require("./date");

const transformUserInfo = (data) => ({
  type: data.type,
  name: data.name,
  bio: data.bio,
  company: data.company,
  location: data.location,
  username: data.login,
  profileUrl: data.html_url,
  public_repos: data.public_repos,
  followers: data.followers,
  following: data.following,
  created: formatDate(data.created_at),
  updated: formatDate(data.updated_at),
});

const transformRepository = (repository) => ({
  name: repository.name,
  private: repository.private,
  repoUrl: repository.html_url,
  username: repository.owner.login,
  profileUrl: repository.owner.html_url,
  description: repository.description,
  created: formatDate(repository.created_at),
  updated: formatDate(repository.updated_at),
  pushed: formatDate(repository.pushed_at),
  homepage: repository.homepage,
  issues: repository.open_issues,
  license: repository.license,
  default_branch: repository.default_branch,
});

const transformRepositories = (data) => data.map(transformRepository);

const transformUserFollowers = (data) =>
  data.map((follower) => ({
    type: follower.type,
    avatar: follower.avatar_url,
    username: follower.login,
    profileUrl: follower.html_url,
  }));

module.exports = {
  transformUserInfo,
  transformRepository,
  transformRepositories,
  transformUserFollowers,
};
