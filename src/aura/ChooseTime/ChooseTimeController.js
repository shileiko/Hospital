/**
 * Created by Admin on 17.09.2019.
 */

({
    doInit: function(component, event, helper) {
        component.set('v.todayDate', $A.localizationService.formatDate(new Date(), "YYYY-MM-DD"));
    },

    closeComp : function (component, event, helper) {
        component.destroy();
    },

    doSearchByTime : function (component, event, helper) {
        helper.doSearchByTimeHelper(component);
    },

    orderByTime : function (component, event, helper) {
        helper.orderByTimeHelper(component, event);
    }
});