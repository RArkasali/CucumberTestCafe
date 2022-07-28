
const testControllerHolder = {
    testController: null,
    captureResolver: null,
    getResolver: null,

    // This function is used to capture the testController object and return a promise to be resolved when the Cucumber script finishes.
    // This function will be called by the TestCafe test in the beginning.
    capture: function(t) {
        testControllerHolder.testController = t;
            if (testControllerHolder.getResolver) {
  
                testControllerHolder.getResolver(t);

            }
            return new Promise(function(resolve) {

                testControllerHolder.captureResolver = resolve;

            });
        },

    // This function is used to free the testController object.
    // This function will be called by the TestCafe test in the ending.

    free: function() {
        testControllerHolder.testController = null;
            if (testControllerHolder.captureResolver) {
                testControllerHolder.captureResolver();
            }
        },

    // This function is used to resolve and get the testControllerObject.
    // This function will be called by CucumberWorld and helps in setting up the controller asynchronously,
    // then add it to Cucumber’s world scope.
    get: function() {

        return new Promise(function(resolve) {
            
            if (testControllerHolder.testController) {
                resolve(testControllerHolder.testController);
                } else {
                    testControllerHolder.getResolver = resolve;
                }
            });
    }

 };

// Exporting the module for other files to import and use

    module.exports = testControllerHolder;