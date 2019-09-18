/**
 * Created by Admin on 17.09.2019.
 */

public with sharing class PatientViewController {
    @AuraEnabled
    public static List<Appointment__c> getPatientInfo(String id) {
        List<Appointment__c> appointments = [
                SELECT
                        Id,
                        Name,
                        Doctor__r.Name,
                        Appointment_time__c
                FROM
                        Appointment__c
                WHERE
                        Patient__c = :id
        ];
        return appointments;
    }

    @AuraEnabled
    public static void deleteAppointment(String la) {
        Appointment__c appointment = [
                SELECT
                        Id,
                        Name,
                        Doctor__c,
                        Patient__c
                FROM
                        Appointment__c
                WHERE
                        Id =: la
        ];
        appointment.Patient__c = null;
        update appointment;
    }
}