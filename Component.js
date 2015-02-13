jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// set data model on root view
		var oModel = new sap.ui.model.json.JSONModel("model/nslcmock.json");

		sap.ui.getCore().setModel(oModel, "PLANTS");
//http://URLS/sap/bc/mfcall/Z_BAPI_MATERIALMASTER_GETLIST?format=json&MATNUM=100005*&DESCRIPTION=*&PLANTNAME=*&PLANTNUM=2*&DEEPSTRUCTURE=Y
//		var oModel = new sap.ui.model.json.JSONModel("url/sap/bc/mfcall/Z_BAPI_MATERIALMASTER_GETLIST?format=json&MATNUM=*&DESCRIPTION=HEND*&STOCKAMT=1");
		oView.setModel(oModel);

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});