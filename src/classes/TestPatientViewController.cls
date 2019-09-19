/**
 * Created by Admin on 19.09.2019.
 */

@isTest
public with sharing class TestPatientViewController {
    @isTest
    static void testGetPatientInfo() {
        Patient__c pat = new Patient__c(Name = 'Roma', Password__c = '123435');
        insert pat;
        List<Appointment__c> appointments = new List<Appointment__c>();
        for (Integer count = 1; count < 10; count++) {
            appointments.add(new Appointment__c(
                    Duration__c = count,
                    Patient__c = pat.Id,
                    Appointment_time__c = Datetime.newInstance(2019, 09, 10, 10, count, 00)
            ));
        }
        insert appointments;
        List<Appointment__c> appointments2 = PatientViewController.getPatientInfo(pat.Id);
        System.assertEquals(appointments.size(), appointments2.size());
    }

    @isTest
    static void testDeleteAppointmentController() {
        Patient__c pat = new Patient__c(Name = 'Roma', Password__c = '123435');
        insert pat;
        Appointment__c appointment = new Appointment__c(
                Duration__c = 30,
                Patient__c = pat.Id,
                Appointment_time__c = Datetime.newInstance(2019, 09, 10, 10, 10, 00)
        );
        insert appointment;
        PatientViewController.deleteAppointmentController(appointment.Id);
        Appointment__c appointment2 = [SELECT Id, Patient__c FROM Appointment__c WHERE Id = :appointment.Id LIMIT 1];
        System.assertEquals(appointment2.Patient__c, null);
    }
}