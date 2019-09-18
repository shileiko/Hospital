/**
 * Created by Admin on 16.09.2019.
 */

({
    doSearchHelper : function (component, event, helper) {
        let position = component.find('position').get('v.value');
        let name = component.find('doctorName').get('v.value');
        let action = component.get("c.chooseDoctors");

        action.setParams({
            docName : name,
            pos : position
        });

        action.setCallback(this,function(chooseDoc){
            let state = chooseDoc.getState();
            console.log(state);
            if(state == "SUCCESS"){
                console.log('a.getReturnValue', chooseDoc.getReturnValue());
                component.set("v.DoctorList", chooseDoc.getReturnValue());
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        $A.enqueueAction(action);
    },

    orderHelper : function (component, event, helper) {
        let appointmentId = event.getSource().get("v.value");
        let action = component.get("c.orderAppointment");
        let patId = component.get("v.patientId");

        action.setParams({
            patientId: patId,
            appId: appointmentId
        });

        alert("You order that appointment");

        $A.enqueueAction(action);
    }
});