const addDays = require("date-fns/addDays");
const format = require("date-fns/format");

function getDateAfterDays(days) {
  const modifiedDay = addDays(new Date(2020, 7, 22), days);
  const formattedDate = format(modifiedDay, "dd-MM-yyyy");
  return formattedDate;
}

module.exports = getDateAfterDays;
