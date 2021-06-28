const moment = require("moment");

const formatDate = (date, format = "MMM Do, YYYY") =>
  moment(date).format(format);

module.exports = {
  formatDate,
};
