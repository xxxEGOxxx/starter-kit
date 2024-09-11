sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
  // ns ????
      return Controller.extend("stk.starterkit.controller.CustomersList", {
        onInit: function() {

        },
        onCustomerPress: function(oEvent){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("CustomerDetails", {
            CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
          });
        },

        onAdd: function(oEvent){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("AddCustomer", {
            
          });
        },
        onPerformanceList: function(oEvent){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("PerformanceList", {
            
          });
        },
      });
    }
  );
  