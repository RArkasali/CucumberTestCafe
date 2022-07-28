Feature: Test Scennarios for the Adding a computer to the database

    Scenario: Filter Computer Name - valid Search
        Given I open the website
        When  Valid Search - I enter the computer name "Acer Iconia"
        And  Valid Search - User clicks on filer by name button
        Then  Valid Search - one result is retuened with name Acer Iconia
    
    Scenario: Filter Computer Name - Invalid Search
        Given I open the website
        And  Invalid Search - enter an invalid computer name "&*&*&*&"
        And  Invalid Search - user clicks search
        Then  Invalid Search - no result should be retruned

    Scenario: Computer Addition - Happy Flow
        Given I open the website
        And  Computer Add - user clicks add new computer button
        And  Computer Add - enter a computer name "test_computer"
        And  Computer Add - enter Introduced Date "2000-06-02"
        And  Computer Add - enter Discontinued Date "2022-06-01"
        And  Computer Add - choose company
        And  Computer Add - create the computer
        Then  Computer Add - successful computer creation

    Scenario: Add Couputer Compter Name having only Special Characters
        Given I open the website
        And  Special Character in Computer Name - user clicks add new computer
        And  Special Character in Computer Name - enter all special characters in computer name "!@#$%^"
        And  Special Character in Computer Name - enter Introduced Valid Date "2000-06-02"
        And  Special Character in Computer Name - enter Discontinued Valid Date "2022-06-01"
        And  Special Character in Computer Name - choose valid company
        And  Special Character in Computer Name - create the computer with blank name
        Then  Special Character in Computer Name - successful computer creation with blank name

    Scenario: Add Computer with Only Name
        Given I open the website
        And  Negative Computer Add Scenario - user clicks add new computer
        And  Negative Computer Add Scenario - No computer name "No Other Fields"
        And  Negative Computer Add Scenario - create computer
        Then  Negative Computer Add Scenario - successful computer creation with blank name

    Scenario: Add Computer Page - Mandatory Field Validation
        Given I open the website
        And  Computer Mandatory Field Validation - go back to add computer page
        And  click add computer button
        Then  validation of computer name mandatory message validation
        And  DATE FORMAT VALIDATION "Ravi's Computer"
        And  DATE FORMAT VALIDATION enter Introduced Valid Date "2000-13-02"
        And  click add computer buttonOne
        Then validation of incorrect date format
        And  DATE FORMAT VALIDATION enter Introduced invalid Date "2000-12-02"
        And  DATE FORMAT VALIDATION Discontinued Valid Date "2022-13-01"
        And  click add computer buttonTwo
        Then validation of incorrect date format


