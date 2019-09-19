/**
 * Created by Admin on 19.09.2019.
 */

public with sharing class LoginController {
    @AuraEnabled
    public static String checkLogin(String name, String password) {
        Patient__c patient = [
                SELECT
                        Id,
                        Name,
                        Password__c
                FROM
                        Patient__c
                WHERE
                        Name = :name
        ];

        if (patient.Password__c == password) {
            return patient.Id;
        } else {
            return null;
        }
    }
}