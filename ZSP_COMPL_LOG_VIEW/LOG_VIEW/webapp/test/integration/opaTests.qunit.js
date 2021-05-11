/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZSP_COMPL/LOG_VIEW/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
