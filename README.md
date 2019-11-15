
# Getting started: Cucumber-js with Selenium webdriver
mylearning is a github repository which automates a webbrowser using **CucumberJS with Selenium webdriver**

Let's walk through getting setup,

## Installation :thought_balloon:

First of all, we require a javascript editor and NodeJs installed in our machine. You can use any text editor of your choice. Here, I have used Visual studio code for setting up this framework.

Download and install Visual studio code : (https://code.visualstudio.com/download)

Next, as we are working with JavaScript, please install Node.js

Download and install Node.js : (https://nodejs.org/en/download/)

### 1. From the commandline, create a new directory
*here, cucumberJsTest*

:file_folder: $ ***mkdir cucumberJsTest***

### 2. Run the below npm init command and provide values 
*you can just press enter to set default values or use **'npm init -y'** to create your package.json directly*

$ ***npm init***

This would have created a package.json file in your directory

### 3. Install all the dependencies (cucumber,selenium-webdriver,chai-assertion library,chromedriver and cucumber-html-reporter report generator)

$ ***npm i --save-dev cucumber***

$ ***npm i --save-dev selenium-webdriver***

$ ***npm i --save-dev cucumber-html-reporter***

$ ***npm i --save-dev chromedriver***

$ ***npm i --save-dev chai***

:clap: So, we are done with the installation part

## Let's start creating our tests

### 1. Create a Feature file

Create a file, say, testFeature.feature. A Feature file can be said as an entry point to your cucumber tests. Feature, Scenario, Scenario outline, Given, When, And and Then are some of the most used keywords defined by Gherkin.

***Feature:*** Defines what feature you will be testing in the tests below

***Given:*** Tells the pre-condition of the test

***And:*** Defines additional conditions of the test

***Then:*** States the post condition. You can say that it is expected result of the test.

### 2. Create a step definition file

Now that we have a scenario, we can ask Cucumber to execute it and create steps for our step definition file

#########Run your feature file alone to generate steps
./node_modules/.bin/cucumber.js --spec ./test/features/testFeature.feature    ----- Assuming that i am having my feature file inside test/features

$ ***npm test***

### 3. Start coding

Your step definition file will have the code that needs to get executed. When Cucumber executes a Gherkin step in a scenario, it will look for a matching step definition to execute.

:+1: All done!!!

Since this automation framework uses a page object model, we have added few additional files. Instead of having all the code in file, it is splitted to multiple files according to their purpose.

### 1. BasePage.js

Basepage.js has the driver information which is required to launch the chrome driver and to visit the desired url

### 2. HomePage.js

Homepage.js is build on the concept of page object model which is an object repository for the homepage. You can add multiple pageObjects for different pages to enhance test maintenance and reduce code duplication.

### 3. Properties.js

Can be used to store static data in key and value pair.

### 4. Hooks.js

Hooks are blocks of code that can run at various points in the Cucumber execution cycle. They are typically used for setup and teardown of the environment before and after each scenario.

***Before***    - Before hooks run before the first step of each scenario.
***After***     - After hooks run after the last step of each scenario, even when steps are failed, undefined, pending, or skipped
***BeforeAll*** - Defines a hook which is run before all scenarios
***AfterAll***  - A hook which is run after all scenarios have completed.

### 5. Report.js

Report.js creates HTML report using cucumber-html-report generator.

### 6. Cucumber.js

To prevent users from having to enter the options they use every time. Users can define cucumber.js at the root of the project with profiles which are groups of command line arguments.

## Running Tests

Please clone this repo and run the following commands:

$ ***git clone https://github.com/teenababu7/mylearning.git***

$ ***npm install***



###### Hope this helps....! Don't regret.. Just learn and Grow ######  :mortar_board:
