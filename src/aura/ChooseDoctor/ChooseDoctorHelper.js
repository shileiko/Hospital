/**
 * Created by Admin on 16.09.2019.
 */

({
    doSearchHelper : function (component, event, helper) {
        var position = component.find('position').get('v.value');
        var name = component.find('doctorName').get('v.value');
        var action = component.get("c.chooseDoctors");

        action.setParams({
            docName : name,
            pos : position
        });

        action.setCallback(this,function(chooseDoc){
            var state = chooseDoc.getState();
            console.log(state);
            if(state == "SUCCESS"){
                console.log('a.getReturnValue', chooseDoc.getReturnValue());
                component.set("v.DoctorList", chooseDoc.getReturnValue());
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        $A.enqueueAction(action);
    }
});