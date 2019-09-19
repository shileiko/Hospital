/**
 * Created by Admin on 17.09.2019.
 */

({
    doInitHelper: function (component, event, helper) {
        let patId = component.get("v.patientId");
        let action = component.get("c.getPatientInfo");

        action.setParams({
            id : patId
        });

        action.setCallback(this,function(inf){
            let state = inf.getState();
            if(state == "SUCCESS"){
                console.log('a.getReturnValue', inf.getReturnValue());
                component.set("v.AppointmentList", inf.getReturnValue());
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        $A.enqueueAction(action);
    },

    deleteAppointmentHelper: function (component, event, helper) {
        var act = component.get("c.deleteAppointmentController");
        let appointmentId = event.getSource().get("v.value");

        act.setParams({
            la : appointmentId
        });

        alert("You delete appointment");

        $A.enqueueAction(act);
    }
});