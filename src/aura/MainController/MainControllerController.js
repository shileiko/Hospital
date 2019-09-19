/**
 * Created by Admin on 16.09.2019.
 */

({
    chooseDoctor: function (component, event, helper) {
        $A.createComponent(
            "c:ChooseDoctor",
            {
                "patientId": component.get("v.patientId")
            },
            function (newComponent, status, errorMessage) {
                console.log('status:', status);
                if (status === "SUCCESS") {
                    let body = component.find("ChooseDoctor");
                    body.set("v.body", newComponent);
                } else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                } else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
    },

    chooseTime: function (component, event, helper) {
        $A.createComponent(
            "c:ChooseTime",
            {
                "patId": component.get("v.patientId")
            },
            function (newComponent, status, errorMessage) {
                console.log('status:', status);
                if (status === "SUCCESS") {
                    let body = component.find("ChooseTime");
                    body.set("v.body", newComponent);
                } else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                } else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
    },

    viewDetails: function (component, event, helper) {
        let patientId = component.get("v.patientId");
        console.log(patientId);
        $A.createComponent(
            "c:PatientView",
            {
                'patientId': patientId
            },
            function (newComponent, status, errorMessage) {
                console.log('status:', status);
                if (status === "SUCCESS") {
                    let body = component.find("PatientView");
                    body.set("v.body", newComponent);
                } else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                } else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        )
    }
});