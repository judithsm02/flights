
sap.ui.define([
    "sap/ui/core/Renderer"
   ],
    
   // aixo es una renderització personalitzada del control planeInfo
    function (Renderer) {
    "use strict";
   
        var PlaneInfoRenderer = Renderer.extend("student00.com.sap.training.ux402.fullscreen.ux402fullscreen.control.PlaneInfoRenderer"); // es crea una nova clase
        PlaneInfoRenderer.apiVersion = 2;    // especifica quina versio de la API s'tulitzarà en aquesta clase. 
        PlaneInfoRenderer.render = function(oRm, oControl) { // es crea una funció renderer dins la clase planeinforenderer amb dos arguments. aixo crea una taula

            oRm.openStart("div",oControl); // es crea un div per el ocontrol del PlaneInfo
            oRm.openEnd(); // es tanca el div

            oRm.openStart("table"); // es crea una taula
            oRm.attr("align", "center"); // se li passen propietats
            oRm.openEnd();

            oRm.openStart("tr"); // primera fila de la taula tr= table row
            oRm.openEnd();
            oRm.openStart("td"); //td: table data
            oRm.openEnd();            
            oRm.icon("sap-icon://person-placeholder"); //icon de sap placeholder
            oRm.text(" "+oControl.getSeatsMax()); // Valor de la propiedad seatsMax del control que se li pasa en planeInfo
            oRm.close("td");
            oRm.close("tr");

            oRm.openStart("tr"); //segona fila de la taula
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.icon("sap-icon://suitcase") //icon del sap, suitcase
            oRm.text(" "+oControl.getSeatsOcc()); // Valor de la propiedad SeatsOcc del control que se li pasa en planeInfo
            oRm.close("td");
            oRm.close("tr");
            oRm.close("table");
            oRm.close("div"); 
        }    

    return PlaneInfoRenderer;

})


            
