const {Given, When, Then} = require('cucumber');
const { Selector, t } = require('testcafe');

Given ('I open the website', async function(){
    
    await testController.navigateTo("http://computer-database.herokuapp.com");

});


// SCENARIO 1

When ('Valid Search - I enter the computer name {string}', async function(computer_name){

    let input = Selector('input#searchbox').with({boundTestRun:testController});
    await testController
    .typeText(input,computer_name);

});

When ('Valid Search - User clicks on filer by name button', async function() {

    let button = Selector('input#searchsubmit').with({boundTestRun:testController});
    await testController
    .click(button);
    
});

Then ('Valid Search - one result is retuened with name Acer Iconia', async function(){
    let section = Selector('section#main').with({boundTestRun:testController});
    await testController.expect(section.innerText).contains('One computer found');
});


// SCENARIO 2
When ('Invalid Search - enter an invalid computer name {string}', async function(invalid_computer_name){

    let input = Selector('input#searchbox').with({boundTestRun:testController});
    await testController
    .typeText(input,invalid_computer_name);
});

When ('Invalid Search - user clicks search', async function() {

    let button = Selector('input#searchsubmit').with({boundTestRun:testController});
    await testController
    .click(button);
    
});

Then ('Invalid Search - no result should be retruned', async function(){
    let section = Selector('section#main').with({boundTestRun:testController});
    await testController.expect(section.innerText).contains('No computers found');
});

// SCENARIO 3
When ('Computer Add - user clicks add new computer button', async function() {

    let add = Selector('a#add').with({boundTestRun:testController});
    await testController
    .click(add);
});

When ('Computer Add - enter a computer name {string}', async function(computer_name_valid){
    let computer_name = Selector('input#name').with({boundTestRun: testController});
    await testController
    .typeText(computer_name, computer_name_valid)
});

When ('Computer Add - enter Introduced Date {string}', async function(introduced_date){
    let intro_date = Selector('input#introduced').with({boundTestRun: testController});
    await testController
    .typeText(intro_date, introduced_date)
});

When ('Computer Add - enter Discontinued Date {string}', async function(discontinued_date){
    let disc_date = Selector('input#discontinued').with({boundTestRun: testController});
    await testController
    .typeText(disc_date, discontinued_date)
});

When ('Computer Add - choose company', async function(){
    let company = Selector('select#company').with({boundTestRun: testController});
    let company_option = company.find('option');
    await testController
    .click(company)
    .click(company_option.withText('RCA'))
});

When ('Computer Add - create the computer', async function() {

    await testController
    .pressKey("tab");
    await testController
    .wait(2000);
    await testController
    .pressKey("enter");
 
});

Then ('Computer Add - successful computer creation', async function(){
    let successmessage = Selector('div').child('strong').with({boundTestRun: testController})
    await testController.expect(successmessage.innerText).contains('Done!');
});


// SCENARIO 4
When ('Special Character in Computer Name - user clicks add new computer', async function() {

    let add = Selector('a#add').with({boundTestRun:testController});
    await testController
    .click(add);
});

When ('Special Character in Computer Name - enter all special characters in computer name {string}', async function(computer_name_valid){
    let computer_name = Selector('input#name').with({boundTestRun: testController});
    await testController
    .typeText(computer_name, computer_name_valid)
});

When ('Special Character in Computer Name - enter Introduced Valid Date {string}', async function(introduced_date){
    let intro_date = Selector('input#introduced').with({boundTestRun: testController});
    await testController
    .typeText(intro_date, introduced_date)
});

When ('Special Character in Computer Name - enter Discontinued Valid Date {string}', async function(discontinued_date){
    let disc_date = Selector('input#discontinued').with({boundTestRun: testController});
    await testController
    .typeText(disc_date, discontinued_date)
});

When ('Special Character in Computer Name - choose valid company', async function(){
    let company = Selector('select#company').with({boundTestRun: testController});
    let company_option = company.find('option');
    await testController
    .click(company)
    .click(company_option.withText('RCA'))
});

When ('Special Character in Computer Name - create the computer with blank name', async function() {

    await testController
    .pressKey("tab");
    await testController
    .wait(2000);
    await testController
    .pressKey("enter");
 
});


Then ('Special Character in Computer Name - successful computer creation with blank name', async function(){
    let successmessage = Selector('div').child('strong').with({boundTestRun: testController})
    await testController.expect(successmessage.innerText).contains('Done!');
});


// SCENARIO 6
When ('Computer Mandatory Field Validation - go back to add computer page', async function() {

    let add = Selector('a#add').with({boundTestRun:testController});
    await testController
    .click(add);
});

When ('click add computer button', async function() {

    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);

    await testController
    .pressKey("enter");
 
});

Then ('validation of computer name mandatory message validation', async function(){
    let validation_msg = Selector('span').with({boundTestRun: testController})
    await testController.expect(validation_msg.innerText).contains('Required');
});

Then ('validation of incorrect date format', async function(){
    let date_filed = Selector('span').nth(1).with({boundTestRun: testController})
    await testController.expect(date_filed.innerText).contains('Date');
});

When ('click add computer buttonOne', async function() {

    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("enter");
 
});

When ('click add computer buttonTwo', async function() {

    await testController
    .pressKey("tab");
    await testController
    .wait(200);
    await testController
    .pressKey("tab");
    await testController
    .pressKey("enter");
 
});

When ('Negative Computer Add Scenario - user clicks add new computer', async function() {

    let add = Selector('a#add').with({boundTestRun:testController});
    await testController
    .click(add);
});

When ('Negative Computer Add Scenario - No computer name {string}', async function(computer_name_valid){
    let computer_name = Selector('input#name').with({boundTestRun: testController});
    await testController
    .typeText(computer_name, computer_name_valid)
});

When ('Negative Computer Add Scenario - create computer', async function() {

    await testController
    .pressKey("tab");
    await testController
    .wait(2000);
    await testController
    .pressKey("enter");
 
});

Then ('Negative Computer Add Scenario - successful computer creation with blank name', async function(){
    let successmessage = Selector('div').child('strong').with({boundTestRun: testController})
    await testController.expect(successmessage.innerText).contains('Done!');
});

When ('DATE FORMAT VALIDATION {string}', async function(computer_name_valid){
    let computer_name = Selector('input#name').with({boundTestRun: testController});
    await testController
    .typeText(computer_name, computer_name_valid)
});

When ('DATE FORMAT VALIDATION enter Introduced Valid Date {string}', async function(introduced_date){
    let intro_date = Selector('input#introduced').with({boundTestRun: testController});
    await testController
    .typeText(intro_date, introduced_date)
});

When ('DATE FORMAT VALIDATION Discontinued Valid Date {string}', async function(discontinued_date){
    let disc_date = Selector('input#discontinued').with({boundTestRun: testController});
    await testController
    .typeText(disc_date, discontinued_date)
});

When ('DATE FORMAT VALIDATION enter Introduced invalid Date {string}', async function(introduced_date){
    let intro_date = Selector('input#introduced').with({boundTestRun: testController});
    await testController
    .typeText(intro_date, introduced_date, {replace: true})
});