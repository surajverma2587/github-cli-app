const { formatDate } = require("./date");

const transformUserInfo = (data) => {
  return {
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
  };
};

module.exports = {
  transformUserInfo,
};
