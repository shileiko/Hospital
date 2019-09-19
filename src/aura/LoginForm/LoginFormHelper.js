/**
 * Created by Admin on 19.09.2019.
 */

({
    loginClickHelper:function (component, event, helper) {
        let name = component.find("patientLogin").get("v.value");
        let pass = component.find("pass").get("v.value");
        let action = component.get("c.checkLogin");

        action.setParams({
            name: name,
            password: pass
        });

        action.setCallback(this, function(response) {
            action = response.getReturnValue();
            let state = response.getState();
            if (state === "SUCCESS" && action != null) {
                let createEvent = $A.get("e.c:LoginFormEvent");
                createEvent.setParams({ "PatientId" : action });
                createEvent.fire();
                component.destroy();
            } else {
                alert('Please, check the entered data!');
            }
        });
        $A.enqueueAction(action);
    }
});