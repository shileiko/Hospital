/**
 * Created by Admin on 16.09.2019.
 */

public with sharing class ChooseDoctorController {
    @AuraEnabled
    public static List<Appointment__c> chooseDoctors(String docName, String pos) {
        String query = 'SELECT Id, Name, Appointment_time__c FROM Appointment__c WHERE Doctor__r.Name LIKE \'' + docName +
                '\' AND Doctor__r.Position__c LIKE \'' + pos + '\'';
        system.debug(query);
        List<Appointment__c> listDoctors = Database.query(query);
        return listDoctors;
    }
}