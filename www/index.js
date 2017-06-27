function loadARchitectWorld() {
	var wikitude = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
	wikitude.isDeviceSupported(function () {
		wikitude.loadARchitectWorld(function () {
		}, function (error) {
			alert('loadARchitectWorld failed: ' + error);
		},
			"www/world/index.html",
			[]
		);
	}, function (error) {
		alert(error);
	},
		[]
	);
}
