const { Before, After, Status, BeforeAll, AfterAll } = require('cucumber');
const _ = require('lodash');
const Report = require('./report');

// After hooks run after the last step of each scenario, even when steps are failed, undefined, pending, or skipped.
// The scenario parameter is optional, but if you use it, you can inspect the status of the scenario.
// Hooks can be conditionally selected for execution based on the tags of the scenario.
// After(async function (scenario) {
//         await this.sleep(500);
//         await this.driver.quit();
    
// });

// Defines a hook which is run before all scenarios.
// Multiple BeforeAll hooks are executed in the order that they are defined.
// BeforeAll(async function () {
//     console.log("Execute before all hook.");
// });

// Defines a hook which is run after all scenarios have completed.
// Multiple AfterAll hooks are executed in the reverse order that they are defined.
AfterAll(async function () {
    console.log("Execute after all hook.");

    setTimeout(() => {
        Report.generate();
    }, 1000)
});