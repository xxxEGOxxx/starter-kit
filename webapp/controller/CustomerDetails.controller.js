sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "stk/starterkit/model/formatter"
    ],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function(Controller, Formatter) {
      "use strict";
// ns ????
      return Controller.extend("stk.starterkit.controller.CustomerDetails", {
        formatter: Formatter,
        onInit: function() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched,this);
        },
        _onPatternMatched: function(oEvent){
          this.getView().bindElement({
            path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
            parameters:{
              expand: "Orders,Orders/Employee"
            }
            
          });
        },
        async onContactInfoPress() {
          
          this.oDialog ??= await this.loadFragment({
            name: "stk.starterkit.view.ContactInfoDialog"
          });

          this.oDialog.open();
          
          
        },
        onClose(){
          this.oDialog.close();
        },
        handleNavButtonPress(){
          console.log("aaaaaaaaaaaaaaaaaa")
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("CustomersList", {
            
          });
        }
      });
    }
  );
  