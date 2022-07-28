1
// World is an isolated context for each cucumber scenario, exposed to the hooks and steps.

// Import setWorldConstructor from cucumber-js.

const { setWorldConstructor } = require('cucumber');
const testControllerHolder = require('./testControllerHolder');
function CustomWorld() {

/*
1. The waitForTestController promise object waits for TestCafe to finish setting up the controller asynchronously, 
then adds it to Cucumber’s world scope as testController.
2. It calls the testControllerHolder.get function to trigger the promise to return the testController.
*/

    this.waitForTestController = testControllerHolder.get()

        .then(function (tc) {

            return testController = tc;

        });

}
setWorldConstructor(CustomWorld);