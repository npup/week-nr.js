/*
  The ISO 8601 standard defines week numbers using a Monday-based week (i.e. the week begins on Monday).
  The first week of a year is "the week that contains the first Thursday of the year", which
  is the same as "the week with January 4th in it" (http://en.wikipedia.org/wiki/ISO_8601)
*/
var getWeekNr;
("undefined"==typeof getWeekNr) && (getWeekNr= (function () {
  var DAY_IN_MS = 1000*60*60*24, DAY_MONDAY = 1, DAY_SUNDAY = 0, MONTH_JAN = 0, MONTH_DEC = 11;

  function getStartOfWeek(date) {return new Date(date.getFullYear(), date.getMonth(), date.getDate()-((date.getDay()||7)-1));}
  function getStartOfFirstWeek(year) {return getStartOfWeek(new Date(year, 0, 4));}

  function isFirstWeek(date) { 
    var month = date.getMonth(), d;
    if (month!=MONTH_DEC && month!=MONTH_JAN) {return false;} // heavy optimization!!
    d = new Date(date.getFullYear(), month, date.getDate()+(7-(date.getDay()||7))); // fast forward to upcoming sunday
    return d.getDate() >= 4; // date is in a week that contains jan 4th?
  }

  function getWeekNr(date) {
    arguments.length < 1 && (date = new Date); // no param yields result for "now"
    var year = date.getFullYear()
      , startOfFirstWeek = getStartOfFirstWeek(year) // obtain monday of the week that is week 1
      , startOfWeek = getStartOfWeek(date) // obtain monday of the week of sought date
      , daysDiff = Math.ceil((+startOfWeek - startOfFirstWeek) / (DAY_IN_MS))+1
      , week = Math.ceil(daysDiff/7);
    if (week==53 && isFirstWeek(date)) {return 1;} // a week 53 might be a week 1 after all..
    return (week > 0) ? week : getWeekNr(new Date(year-1, MONTH_DEC, 31)); // recurse if week belongs to previous year
  }

  return getWeekNr;
}()));

(function () {
  var toExport = {"getWeekNr": getWeekNr};
  (function() {
    var api = this, undefinedType = "undefined";
    if (undefinedType!=typeof module && undefinedType!=typeof module.exports && "function"==typeof require) {
      for (var name in api) {exports[name] = api[name];}
    }
  }).call(toExport);
})();
