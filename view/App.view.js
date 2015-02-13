sap.ui.jsview("sap.ui.demo.myFiori.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.myFiori.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();

		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.demo.myFiori.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the empty page
		var empty = sap.ui.xmlview("Empty", "sap.ui.demo.myFiori.view.Empty");
		this.app.addPage(empty, false);
		
		// wrap app with shell
		return new sap.m.Shell("Shell", {
			title : "{i18n>ShellTitle}",
			showLogout : false,
			app : this.app
		});
	}
});

var map;
var geocoder;
function mvk(txt)
{
 //   alert("debug: "+txt);
}


function codeAddress(address) {
    mvk(address);
//    var address =  "Atlântica, 702 - Copacabana - Rio de Janeiro ";
    ///document.getElementById('address').value;
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            mvk('Geocode was  successful for the following reason: ' + status);
        } else {
            alert('Geocode was not successful for "+address+"reason: ' + status);
        }
    });
}

function handleNoGeolocation(errorFlag) 
{
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

	

var oApplication = {};  
//    sap.ui.localResources("v");  
//    sap.ui.xmlview("appView", "v.appView").placeAt("content");  