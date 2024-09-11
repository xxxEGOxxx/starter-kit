sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
      return Controller.extend("stk.starterkit.controller.AddCustomer", {
        onInit: function() {
        },
        onCreate(){
            var sId = this.byId("CustomerID").getValue();
            var sName = this.byId("CustomerName").getValue();
            console.log(sId);
            console.log(sName);
            this.getView().getModel().create("/Customers", {
                CustomerID: sId,
                CompanyName: sName,
            })
        },
        handleNavButtonPress(){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("CustomersList", {
            
          });
        }
      });
    }
  );
  