/**
 * Created by Admin on 16.09.2019.
 */

public with sharing class ChooseDoctorController {

    @AuraEnabled
    public static void orderAppointment(String patientId, String appId) {
        Appointment__c appointment = [
                SELECT
                        Id,
                        Name,
                        Doctor__c
                FROM
                        Appointment__c
                WHERE
                        Id =: appId
        ];
        appointment.Patient__c = patientId;
        update appointment;
    }

    @AuraEnabled
    public static List<Appointment__c> chooseDoctors(String docName, String pos, String data) {
        String query = 'SELECT Id, Name, Appointment_time__c, Doctor__r.Name ' +
                'FROM Appointment__c WHERE Patient__c = null AND';
        if (String.isNotEmpty(docName) && String.isNotEmpty(pos)) {
            query += ' Doctor__r.Name LIKE \'' + docName + '\' AND Doctor__r.Position__c LIKE \'' + pos + '\'';}
        if (String.isNotEmpty(data)) {
            query += ' Appointment_time__c > ' + data + 'T00:00:00.000Z AND Appointment_time__c < ' +
                    data + 'T23:59:59.000Z';
        }
        List<Appointment__c> listDoctors = Database.query(query);
        return listDoctors;
    }
}