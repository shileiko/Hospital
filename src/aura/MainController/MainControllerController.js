/**
 * Created by Admin on 16.09.2019.
 */

({
    chooseDoctor : function (component, event, helper) {
        $A.createComponent(
            "c:ChooseDoctor",
            {},
            function(newComponent, status, errorMessage){
                console.log('status:', status);
                if (status === "SUCCESS") {
                    var body = component.find("ChooseDoctor");
                    body.set("v.body", newComponent);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
    },

    chooseTime : function (component, event, helper) {
        $A.createComponent(
            "c:ChooseTime",
            {},
            function(newComponent, status, errorMessage){
                console.log('status:', status);
                if (status === "SUCCESS") {
                    var body = component.find("ChooseTime");
                    body.set("v.body", newComponent);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
    }
});