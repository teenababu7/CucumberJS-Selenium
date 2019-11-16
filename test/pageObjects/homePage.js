/**
 * PageObjects and Methods 
 */
var webdriver = require('selenium-webdriver');
var expect = require('chai').expect;
var By = webdriver.By;
var BasePage = require('./pageBase')

class HomePage extends BasePage {
    getCurrency(expectedCurrency) {
        driver.findElement(By.id('currencyMenu')).then(function (text) {
            text.getText().then(function (currency) {
               expect(currency).to.equal(expectedCurrency);
            })
        })
    }

    searchfor() {
        driver.findElement(By.id('q')).sendKeys("safety boots");
        driver.findElement(By.xpath("//form[@class='search-box']/button")).click();
        console.log('searched for safety boots')
        driver.sleep(30000);
    }
} module.exports = new HomePage();