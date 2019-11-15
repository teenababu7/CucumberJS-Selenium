/**
 * PageObjects and Methods 
 */
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var BasePage = require('./pageBase')

class HomePage extends BasePage {
    getCurrency() {
        driver.findElement(By.id('currencyMenu')).then(function (text) {
            text.getText().then(function (currency) {
                console.log('Currency to be used is ' + currency);

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