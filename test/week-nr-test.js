var buster = require("buster");
var getWeekNr = require("../build/week-nr").getWeekNr;

/* Utilities for these tests */
function D(y,m,d) {return new Date(y,m-1,d);}
var _ = {
	"getAWeek": function (mondayDate) {
		var week = {}, DAY_IN_MS = 1000*60*60*24
		, d = new Date(+mondayDate);
		for (var i=0; i<7; ++i) {
			week[+d] = d;
			d = new Date(+d+DAY_IN_MS);
		}
		return week;
	}
	, "testWeek": function (weekStart, weekNr) {
		var week = this.getAWeek(weekStart), actual;
		for (var entry in week) {
			actual = getWeekNr(week[entry]);
			assert.equals(actual, weekNr, "for date: "+week[entry].toDateString());
		}
	}
};

/* Test cases */

buster.testCase("setup", {
	"module exists": function () {
		assert.isFunction(getWeekNr);
	}
});

buster.testCase("2012", {
	"weeks": function () {
		_.testWeek(D(2012, 01, 02), 1);
		_.testWeek(D(2012, 01, 09), 2);
		_.testWeek(D(2012, 01, 16), 3);
		_.testWeek(D(2012, 01, 23), 4);
		_.testWeek(D(2012, 01, 30), 5);

		_.testWeek(D(2012, 02, 06), 6);
		_.testWeek(D(2012, 02, 13), 7);
		_.testWeek(D(2012, 02, 20), 8);
		_.testWeek(D(2012, 02, 27), 9);

		_.testWeek(D(2012, 03, 05), 10);
		_.testWeek(D(2012, 03, 12), 11);
		_.testWeek(D(2012, 03, 19), 12);
		_.testWeek(D(2012, 03, 26), 13);

		_.testWeek(D(2012, 04, 02), 14);
		_.testWeek(D(2012, 04, 09), 15);
		_.testWeek(D(2012, 04, 16), 16);
		_.testWeek(D(2012, 04, 23), 17);
		_.testWeek(D(2012, 04, 30), 18);

		_.testWeek(D(2012, 05, 7), 19);
		_.testWeek(D(2012, 05, 14), 20);
		_.testWeek(D(2012, 05, 21), 21);
		_.testWeek(D(2012, 05, 28), 22);

		_.testWeek(D(2012, 06, 04), 23);
		_.testWeek(D(2012, 06, 11), 24);
		_.testWeek(D(2012, 06, 18), 25);
		_.testWeek(D(2012, 06, 25), 26);

		_.testWeek(D(2012, 07, 02), 27);
		_.testWeek(D(2012, 07, 09), 28);
		_.testWeek(D(2012, 07, 16), 29);
		_.testWeek(D(2012, 07, 23), 30);
		_.testWeek(D(2012, 07, 30), 31);

		_.testWeek(D(2012, 08, 06), 32);
		_.testWeek(D(2012, 08, 13), 33);
		_.testWeek(D(2012, 08, 20), 34);
		_.testWeek(D(2012, 08, 27), 35);

		_.testWeek(D(2012, 09, 03), 36);
		_.testWeek(D(2012, 09, 10), 37);
		_.testWeek(D(2012, 09, 17), 38);
		_.testWeek(D(2012, 09, 24), 39);

		_.testWeek(D(2012, 10, 01), 40);
		_.testWeek(D(2012, 10, 08), 41);
		_.testWeek(D(2012, 10, 15), 42);
		_.testWeek(D(2012, 10, 22), 43);
		_.testWeek(D(2012, 10, 29), 44);

		_.testWeek(D(2012, 11, 05), 45);
		_.testWeek(D(2012, 11, 12), 46);
		_.testWeek(D(2012, 11, 19), 47);
		_.testWeek(D(2012, 11, 26), 48);

		_.testWeek(D(2012, 12, 03), 49);
		_.testWeek(D(2012, 12, 10), 50);
		_.testWeek(D(2012, 12, 17), 51);
		_.testWeek(D(2012, 12, 24), 52);
	}
});

buster.testCase("2013", {
	"weeks": function () {
	 _.testWeek(D(2012, 12, 31), 1);

	 _.testWeek(D(2013, 01, 07), 2);
	 _.testWeek(D(2013, 01, 14), 3);
	 _.testWeek(D(2013, 01, 21), 4);
	 _.testWeek(D(2013, 01, 28), 5);

	 _.testWeek(D(2013, 02, 04), 6);
	 _.testWeek(D(2013, 02, 11), 7);
	 _.testWeek(D(2013, 02, 18), 8);
	 _.testWeek(D(2013, 02, 25), 9);

	 _.testWeek(D(2013, 03, 04), 10);
	 _.testWeek(D(2013, 03, 11), 11);
	 _.testWeek(D(2013, 03, 18), 12);
	 _.testWeek(D(2013, 03, 25), 13);

	 _.testWeek(D(2013, 04, 01), 14);
	 _.testWeek(D(2013, 04, 08), 15);
	 _.testWeek(D(2013, 04, 15), 16);
	 _.testWeek(D(2013, 04, 22), 17);
	 _.testWeek(D(2013, 04, 29), 18);

	 _.testWeek(D(2013, 05, 06), 19);
	 _.testWeek(D(2013, 05, 13), 20);
	 _.testWeek(D(2013, 05, 20), 21);
	 _.testWeek(D(2013, 05, 27), 22);

	 _.testWeek(D(2013, 06, 03), 23);
	 _.testWeek(D(2013, 06, 10), 24);
	 _.testWeek(D(2013, 06, 17), 25);
	 _.testWeek(D(2013, 06, 24), 26);

	 _.testWeek(D(2013, 07, 01), 27);
	 _.testWeek(D(2013, 07, 08), 28);
	 _.testWeek(D(2013, 07, 15), 29);
	 _.testWeek(D(2013, 07, 22), 30);
	 _.testWeek(D(2013, 07, 29), 31);

	 _.testWeek(D(2013, 08, 05), 32);
	 _.testWeek(D(2013, 08, 12), 33);
	 _.testWeek(D(2013, 08, 19), 34);
	 _.testWeek(D(2013, 08, 26), 35);

	 _.testWeek(D(2013, 09, 02), 36);
	 _.testWeek(D(2013, 09, 09), 37);
	 _.testWeek(D(2013, 09, 16), 38);
	 _.testWeek(D(2013, 09, 23), 39);
	 _.testWeek(D(2013, 09, 30), 40);

	 _.testWeek(D(2013, 10, 07), 41);
	 _.testWeek(D(2013, 10, 14), 42);
	 _.testWeek(D(2013, 10, 21), 43);
	 _.testWeek(D(2013, 10, 28), 44);

	 _.testWeek(D(2013, 11, 04), 45);
	 _.testWeek(D(2013, 11, 11), 46);
	 _.testWeek(D(2013, 11, 18), 47);
	 _.testWeek(D(2013, 11, 25), 48);

	 _.testWeek(D(2013, 12, 02), 49);
	 _.testWeek(D(2013, 12, 09), 50);
	 _.testWeek(D(2013, 12, 16), 51);
	 _.testWeek(D(2013, 12, 23), 52);

	 _.testWeek(D(2013, 12, 30), 1);
		
	}
});

buster.testCase("2015", {
	"weeks": function () {
	 _.testWeek(D(2014, 12, 29), 1);

	 _.testWeek(D(2015, 01, 05), 2);
	 _.testWeek(D(2015, 01, 12), 3);
	 _.testWeek(D(2015, 01, 19), 4);
	 _.testWeek(D(2015, 01, 26), 5);

	 _.testWeek(D(2015, 02, 02), 6);
	 _.testWeek(D(2015, 02, 09), 7);
	 _.testWeek(D(2015, 02, 16), 8);
	 _.testWeek(D(2015, 02, 23), 9);

	 _.testWeek(D(2015, 03, 02), 10);
	 _.testWeek(D(2015, 03, 09), 11);
	 _.testWeek(D(2015, 03, 16), 12);
	 _.testWeek(D(2015, 03, 23), 13);
	 _.testWeek(D(2015, 03, 30), 14);

	 _.testWeek(D(2015, 04, 06), 15);
	 _.testWeek(D(2015, 04, 13), 16);
	 _.testWeek(D(2015, 04, 20), 17);
	 _.testWeek(D(2015, 04, 27), 18);

	 _.testWeek(D(2015, 05, 04), 19);
	 _.testWeek(D(2015, 05, 11), 20);
	 _.testWeek(D(2015, 05, 18), 21);
	 _.testWeek(D(2015, 05, 25), 22);

	 _.testWeek(D(2015, 06, 01), 23);
	 _.testWeek(D(2015, 06, 08), 24);
	 _.testWeek(D(2015, 06, 15), 25);
	 _.testWeek(D(2015, 06, 22), 26);
	 _.testWeek(D(2015, 06, 29), 27);

	 _.testWeek(D(2015, 07, 06), 28);
	 _.testWeek(D(2015, 07, 13), 29);
	 _.testWeek(D(2015, 07, 20), 30);
	 _.testWeek(D(2015, 07, 27), 31);

	 _.testWeek(D(2015, 08, 03), 32);
	 _.testWeek(D(2015, 08, 10), 33);
	 _.testWeek(D(2015, 08, 17), 34);
	 _.testWeek(D(2015, 08, 24), 35);
	 _.testWeek(D(2015, 08, 31), 36);

	 _.testWeek(D(2015, 09, 07), 37);
	 _.testWeek(D(2015, 09, 14), 38);
	 _.testWeek(D(2015, 09, 21), 39);
	 _.testWeek(D(2015, 09, 28), 40);

	 _.testWeek(D(2015, 10, 05), 41);
	 _.testWeek(D(2015, 10, 12), 42);
	 _.testWeek(D(2015, 10, 19), 43);
	 _.testWeek(D(2015, 10, 26), 44);

	 _.testWeek(D(2015, 11, 02), 45);
	 _.testWeek(D(2015, 11, 09), 46);
	 _.testWeek(D(2015, 11, 16), 47);
	 _.testWeek(D(2015, 11, 23), 48);
	 _.testWeek(D(2015, 11, 30), 49);

	 _.testWeek(D(2015, 12, 07), 50);
	 _.testWeek(D(2015, 12, 14), 51);
	 _.testWeek(D(2015, 12, 21), 52);
	 _.testWeek(D(2015, 12, 28), 53);
	}
});


