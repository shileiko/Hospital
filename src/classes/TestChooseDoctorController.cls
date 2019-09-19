/**
 * Created by Admin on 19.09.2019.
 */

@isTest
public with sharing class TestChooseDoctorController {
    @isTest
    static void testOrderAppointment(){
        Patient__c pat = new Patient__c(Name = 'Roma', Password__c = '123435');
        insert pat;
        Appointment__c appointment = new Appointment__c(
                Duration__c = 30,
                Appointment_time__c = Datetime.newInstance(2019, 09, 10, 10, 10, 00)
        );
        insert appointment;
        ChooseDoctorController.orderAppointment(pat.Id, appointment.Id);
        Appointment__c appointment2 = [
                SELECT
                        Id,
                        Patient__c
                FROM
                        Appointment__c
                WHERE
                        Patient__c=:pat.Id
        ];
        System.assert(appointment2.Patient__c != null);
    }

    @isTest
    static void testChooseDoctor(){
        Doctor__c doc = new Doctor__c(Name='Silvestr', Position__c='Hirurg');
        insert doc;
        List<Appointment__c> appointments = new List<Appointment__c>();
        for (Integer count = 1; count < 10; count++) {
            appointments.add(new Appointment__c(
                    Duration__c = count,
                    Doctor__c = doc.Id,
                    Appointment_time__c = Datetime.newInstance(2019, 09, 10, 10, count, 00)
            ));
        }
        insert appointments;
        List<Appointment__c> appointments2 = ChooseDoctorController.chooseDoctors('Silvestr', 'Hirurg', null);
        System.assertEquals(appointments.size(), appointments2.size());
    }

    @isTest
    static void testChooseTime() {
        List<Appointment__c> appointments = new List<Appointment__c>();
        for (Integer count = 1; count < 10; count++) {
            appointments.add(new Appointment__c(
                    Duration__c = count,
                    Appointment_time__c = Datetime.newInstance(2019, 09, 10, 10, count, 00)
            ));
        }
        insert appointments;
        List<Appointment__c> appointments2 = ChooseDoctorController.chooseDoctors(null, null, '2019-09-10');
        System.assertEquals(appointments.size(), appointments2.size());
    }
}