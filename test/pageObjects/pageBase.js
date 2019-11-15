var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var properties = require('../utils/properties')

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

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