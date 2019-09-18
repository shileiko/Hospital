/**
 * Created by Admin on 16.09.2019.
 */

({
    closeComp : function (component, event, helper) {
        component.destroy();
    },

    doSearch : function (component, event, helper) {
        helper.doSearchHelper(component);
    },

    order : function (component, event, helper) {
        helper.orderHelper(component, event);
    }
});