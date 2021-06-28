const moment = require("moment");

const formatDate = (date, format = "MMM Do, YYYY") => {
  // "Mar 1st, 2017"
  return moment(date).format(format);
};

module.exports = {
  formatDate,
};
