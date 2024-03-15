sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("student00.com.sap.training.ux402.fullscreen.ux402fullscreen.controller.Carrier", {
           
                getRouter: function () {
    
                    return sap.ui.core.UIComponent.getRouterFor(this);
                },

           
                onPress: function(oEvent) {

                    var oItem = oEvent.getSource();
                    var oCtx = oItem.getBindingContext();
                    var sCarrid = oCtx.getProperty("Carrid");
    
                    this.getRouter().navTo("flights", {
                        carrid:sCarrid //dins l'objecte flights se li passa el ID del carrier 
                    },false); //controla si la nova vista ha de susbtituir la vista actual a l'historial del navegador, en aquest cas SI. 
    
                     //El false o true es el parametre bReplace que té laa funcion NavTo. 
    
                }
        });
    });
