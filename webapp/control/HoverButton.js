sap.ui.define([
    "sap/m/Button"
],

function (Button) {
    "use strict";

    return Button.extend("student00.com.sap.training.ux402.fullscreen.ux402fullscreen.control.HoverButton", {                   
        metadata: {
            properties: {
                "allowHover": {
                    type: "boolean",
                    defaultValue: false // Puede activarse para permitir el comportamiento de “hover” (pasar el ratón por encima) en el botón.
                },
                "hoverText": { // Texto que se mostrará cuando el usuario haga hover sobre el botón.
                    type: "string"
                }
            },
            events: {
                "hover": {} // Evento personalizado llamado "hover".
            }
        },
        onmouseover: function(evt) { // Función que se ejecuta cuando el usuario coloca el cursor del ratón sobre el botón.
            if (this.getAllowHover()) { // Si allowHover está habilitado, se dispara el evento "hover".
                this.fireHover(); // Evento personalizado.
            }
        },
        renderer: {} // Para mostrar visualmente cómo se renderiza el control sobre la interfaz de usuario.
    });
});
