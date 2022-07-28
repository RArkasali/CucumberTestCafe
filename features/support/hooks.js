const fs = require("fs");
const createTestCafe = require("testcafe");
const testControllerHolder = require("./testControllerHolder");
const { AfterAll, setDefaultTimeout, Before, After } = require("cucumber");
const timeout = 100000;
let cafeRunner = null;

function createTestFile() {
    fs.writeFileSync(
      "cucumbertest.js",
      'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +
        'fixture("cucumberfixture")\n' +
        "test\n" +
        '("test", testControllerHolder.capture)'
    );
  }
  function runTest(browser) {
    if (cafeRunner) {
      return;
    }
      
    createTestCafe("localhost", 1339, 1338)
      .then(function (tc) {
        cafeRunner = tc;
        const runner = tc.createRunner();
        runner
          .src("./cucumbertest.js")
          .screenshots("reports/screenshots/", true)
          .browsers(browser)
          .run();
        return;
      })
      .catch((err) => {
      console.error(err);
      });
  }
  
  setDefaultTimeout(timeout);
  
  Before(function () {
    runTest("chrome");
    createTestFile();
  
    return this.waitForTestController
      .then(function (testController) {
      return testController.maximizeWindow();
      })
      .catch((err) => {
        console.error(err);
      });
  });
  
  After(function () {
    fs.unlinkSync("cucumbertest.js");
  
    // testControllerHolder.free();
    //   cafeRunner.close();
  });
  
  AfterAll(function () {
    let intervalId = null;
    testControllerHolder.free();
  
    function waitForTestCafe() {
      intervalId = setInterval(checkLastResponse, 500);
    }
  
    function checkLastResponse() {
      if (
        testController.testRun.lastDriverStatusResponse ===
        "test-done-confirmation"
      ) {
        cafeRunner.close();
  
        process.exit();
      }
    }
  
    waitForTestCafe();
  });