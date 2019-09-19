/**
 * Created by Admin on 19.09.2019.
 */

({
    handlerPatient: function(component, event, helper) {
        component.set("v.patId", event.getParam("PatientId"));
        component.set("v.flagLoggedIn", true);
    }
});