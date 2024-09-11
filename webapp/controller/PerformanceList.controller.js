sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
      return Controller.extend("stk.starterkit.controller.AddCustomer", {
        onInit: function() {
        },
        // onCreate(){
        //     var sId = this.byId("CustomerID").getValue();
        //     var sName = this.byId("CustomerName").getValue();
        //     console.log(sId);
        //     console.log(sName);
        //     this.getView().getModel().create("/Customers", {
        //         CustomerID: sId,
        //         CompanyName: sName,
        //     })
        // }
        handleNavButtonPress(){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("CustomersList", {
            
          });
        },
        onMotivate: function(oEvent){
          var oEmployee = oEvent.getSource().getBindingContext().getObject();
          var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@capgemini.com";
          var sSubject = "Good job!";
          var sBody = "You are doing well, thank you!";
          sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
        },
        onFire: function(oEvent){
          $.ajax({
            url: "https://evilinsult.com/generate_insult.php",
            data: {
              lang: "en",
              type: "json"
            },
            success: function(oResponse){
              var sBody = JSON.parse(oResponse).insult;
              sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            }
          });
        }
      });
    }
  );
  