/**
 * Created by Admin on 17.09.2019.
 */

({
    doInit: function (component, event, helper) {
        helper.doInitHelper(component);
    },

    closePopup: function (component, event, helper) {
        component.destroy();
    },

    deleteAppointment : function (component, event, helper) {
        helper.deleteAppointmentHelper(component, event);
    }

});