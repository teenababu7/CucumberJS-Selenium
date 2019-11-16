const { Given, Then } = require('cucumber')
var homePage = require('../pageObjects/homePage')

Given('I am on Mammoth homepage', function () {
    homePage.navigateTo();
  });

  Then('I need to verify the currency is displayed as {string}', function (expectedCurrency, callback) {
    homePage.getCurrency(expectedCurrency);
    callback();
  });