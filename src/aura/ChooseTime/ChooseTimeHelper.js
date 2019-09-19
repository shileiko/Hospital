/**
 * Created by Admin on 18.09.2019.
 */

({
    doSearchByTimeHelper: function (component, event, helper) {
        let dT = component.find("dateAppointment").get("v.value");
        let action = component.get("c.chooseDoctors");

        action.setParams({
            data : dT,
            docName : null,
            pos: null
        });

        action.setCallback(this,function(chooseTime){
            let state = chooseTime.getState();
            console.log(state);
            if(state == "SUCCESS"){
                console.log('a.getReturnValue', chooseTime.getReturnValue());
                component.set("v.AppointmentList", chooseTime.getReturnValue());
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        $A.enqueueAction(action);
    },

    orderByTimeHelper: function (component, event, helper) {
        let appointmentId = event.getSource().get("v.value");
        let action = component.get("c.orderAppointment");
        let patId = component.get("v.patId");

        action.setParams({
            patientId: patId,
            appId: appointmentId
        });

        alert("You order that appointment");

        $A.enqueueAction(action);
    }
});