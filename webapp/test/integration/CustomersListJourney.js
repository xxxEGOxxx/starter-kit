/*global QUnit*/

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList",
], function(opaTest){
    "use strict";

    QUnit.module("Customers List Journey");

    opaTest("Should see the initial page of the app", function(Given, When, Then){
        Given.iStartMyApp();

        Then.onTheCustomersList.iShouldSeeTheCarousel();

        Then.iTeardownMyApp();
    })
})