/**
 * Created by Admin on 19.09.2019.
 */

@IsTest
private class TestLoginController {
    @IsTest
    static void testLogin() {
        Patient__c patient = new Patient__c(Name='Kolya', Password__c='12345678');
        insert patient;
        String patient2 = LoginController.checkLogin('Kolya', '12345678');
        System.assertEquals(patient2, patient.Id);
        String patient3 = LoginController.checkLogin('Kolya', '234354645646');
        System.assertEquals(patient3, null);
    }
}