/*
  The ISO 8601 standard defines week numbers using a Monday-based week (i.e. the week begins on Monday).

  Under this definition, the first week of the year is determined to be the first week that contains a Wednesday.
  For example, January 1, 2003 was on a Wednesday; therfore the week it lies in is week number 1 of 2003.
  However, January 1, 2006 started on a Sunday; under the ISO 8601 week definition, this is considered the 52nd week of 2005.
*/
var getWeekNr;
("undefined"==typeof getWeekNr) && (getWeekNr= (function () {
  var DAY_IN_MS = 1000*60*60*24, DAY_MONDAY = 1, DAY_SUNDAY = 0, MONTH_JAN = 0, MONTH_DEC = 11;
  
  function getStartOfFirstWeek(year) {
    var firstWeekDate = new Date(year, 0, 4)
      , startofFirstWeek = new Date(+firstWeekDate);
    while (startofFirstWeek.getDay() != DAY_MONDAY) {
      startofFirstWeek = new Date(+startofFirstWeek-DAY_IN_MS);
    }
    return startofFirstWeek;
  }

  function getStartOfThisWeek(date) {
    var d = new Date(+date);
    while(d.getDay()!=1) {d = new Date(+d-DAY_IN_MS);}
    return d;
  }

   function isWeek1(date) {
    var d = new Date(+date), month = d.getMonth();
    if (month!=MONTH_DEC && month!=MONTH_JAN) {return false;}
    do {
      month = d.getMonth(), dayNr = d.getDate();
      if (month==MONTH_JAN) {
        if (dayNr==4) {break;} // found jan 4th before a monday
        if (d.getDay()==DAY_SUNDAY) {return false;}
      }
      d = new Date(+d+DAY_IN_MS)
    } while(!(month==MONTH_JAN && dayNr==4));
    return true;
  }

  function getWeekNr(date) {
    var year = date.getFullYear();
    var startOfFirstWeek = getStartOfFirstWeek(year);
    var startOfThisWeek = getStartOfThisWeek(date);
    var daysDiff = Math.ceil((+startOfThisWeek - startOfFirstWeek) / (DAY_IN_MS))+1;
    var week = Math.ceil(daysDiff/7);
    if (week==53 && isWeek1(date)) {return 1;}
    if (week > 0) {return week;}
    return getWeekNr(new Date(year-1, MONTH_DEC, 31));
  }

  return getWeekNr;

}()));

(function () {
  var toExport = {"getWeekNr": getWeekNr};
  (function() {
    var undefinedType = "undefined";
    if (undefinedType!=typeof module && undefinedType != typeof module.exports && "function" == typeof require) {
      for (var name in this) {
        exports[name] = this[name];
      }
    }
  }).call(toExport);
})();
