require('chromedriver');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var properties = require('../utils/properties')
var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();

class BasePage{
    /**
     * Instantiate the object
     */
    constructor(){
        global.driver = driver;
    }
    /**
     * Method to loade a page with the url provided in properties file
     */
    navigateTo(){
        driver.get(properties.mammothUrl)
    }
}module.exports = BasePage;