/*
  The ISO 8601 standard defines week numbers using a Monday-based week (i.e. the week begins on Monday).

  Under this definition, the first week of the year is determined to be the first week that contains a Wednesday.
  For example, January 1, 2003 was on a Wednesday; therfore the week it lies in is week number 1 of 2003.
  However, January 1, 2006 started on a Sunday; under the ISO 8601 week definition, this is considered the 52nd week of 2005.
*/
var getWeekNr;
("undefined" == typeof getWeekNr) && (getWeekNr = (function () {
  var DAY_IN_MS = 1000 * 60 * 60 * 24
    , WEEKDAY_WEDNESDAY = 3;

  function getFirstWednesdayOfYear(year) {
    var day = 1, date = new Date(year, 0, day);
    while (date.getDay() != WEEKDAY_WEDNESDAY) {
      date = new Date(year, 0, ++day);
    }
    return date;
  }

  function getDateForStartOfWeek1OfYear(year) {
    var firstWednesdayOfYear = getFirstWednesdayOfYear(year)
      , dateForStartOfWeek1OfYear = new Date(year, 0, firstWednesdayOfYear.getDate() - 2);
    return dateForStartOfWeek1OfYear;
  }

  return function (date) {
    var startOfWeek1OfYear = getDateForStartOfWeek1OfYear(date.getFullYear())
      , daysSinceWeek1Started = (date.getTime() - startOfWeek1OfYear.getTime()) / DAY_IN_MS
      , weekNr = Math.ceil((daysSinceWeek1Started + 1) / 7);
    return weekNr > 0 ? weekNr : 53-weekNr;
  };

}()));
