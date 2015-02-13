sap.ui.controller("sap.ui.demo.myFiori.view.LineItem", {

//var oContext;

	handleNavBack : function (evt) { 
		this.nav.back("Detail");
	   this.initialized = false;  
	   map = null;

	},

	onInit: function (evt) {  
        this.getView().byId("map_canvas").addStyleClass("myMap");  
		 oApplication = this.getView().byId("appMaps");   
	
         oContext = evt.getSource().getBindingContext();  
        console.log("onInit");
//        console.log( " this.getView() = "+ this.getView().byId("LineItem").getData());
//        console.log(  " oc "+		oContext);
        console.log("LINEITEM = " + sap.ui.getCore().getModel("LINEITEM"));

//        console.log(sap.ui.getCore().byId("MATNUM").getValue());
//        console.log(sap.ui.getCore().byId("PLANTS"));				
		/*
		console.log( this.getView().getBindingContext() );
        console.log(this.getView().getBindingContext().getObject());  
        console.log(this.getView().getBindingContext().getProperty("STRAS"));  
		*/

    },  
    onAfterRendering: function (evt) {  
		/*
         var oContext = evt.getSource().getBindingContext();  
        console.log(oContext.getObject());  
        console.log(oContext.getProperty("STRAS"));
		
		var model = this.getModel();
		*/
		        console.log("onAfterRendering");
//		        console.log(oContext.getProperty("STRAS"));


      //  if (!this.initialized) {  
		if(true){
		  var pos = new google.maps.LatLng(44.6488625, 63.5753196);  //Halifax
            this.initialized = true;  
            geocoder = new google.maps.Geocoder();  
            var mapOptions = {  
//                center: new google.maps.LatLng(-34.397, 150.644),  //Toronto 
                center: pos,
                zoom: 10,  
                mapTypeId: google.maps.MapTypeId.ROADMAP
			 //   gridSize: 50,
			   // size(100, 100, 'px', 'px')
            };  
            map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),  
                mapOptions);  		 

	 var infowindow = new google.maps.InfoWindow(
      {
        map: map,
        position: pos,
        content: 'You Are Here. <br>'+'latitude: ' +pos.latitude+'<br>'+'longitude: '+pos.longitude
      });

      map.setCenter(pos);
 

	 codeAddress("2559 Agricola Street Halifax, NS B3K 4C4");
// 	 codeAddress("214 Chain Lake Drive Halifax, NS B3S 1C5");
//     codeAddress("506 Bloor Street West Toronto, ON M5S 1Y3");
	
        }  
    }  
});




