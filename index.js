/* Plugin settings for "cucumber-html-reporter" plugin.
These settings help us in configuring the HTML report to be generated from JSON report.
We can provide information like metadata to be published in the HTML report, theme of the report, 
and other options like scenarioTimestamp, reportSuiteAsScenarios.
*/

var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Title": "Test execution Report",
        "Browser": "Chrome",
        "Platform": "Mac"
    }
};

reporter.generate(options);