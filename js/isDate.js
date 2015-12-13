// Checks to see if entry is a date
function isDate(checkDate) {
  var d = new Date(checkDate);
  return !isNaN(d.valueOf());
}