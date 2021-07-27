const {
    expect
} = require("chai");
const webDriver = require('selenium-webdriver');
const {
    By
} = require('selenium-webdriver');
const {
    until
} = require("selenium-webdriver");


describe('selenium grid test', function () {
    let driver;

    this.timeout(60000);
    beforeEach(function () {
        driver = new webDriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webDriver.Capabilities.firefox())
            .build();
    });
    it('should select Management', function () {
        driver.manage().window().maximize();
        return driver.get('https://www.epam.com/careers')
            .then(() => {
                driver.wait(until.elementLocated(By.css('button.cookie-disclaimer__button')), 5000);
            })
            .then(() => {
                driver.findElement(By.css('button.cookie-disclaimer__button')).click();
            })
            .then(() => {
                driver.findElement(By.css('li a[href *= careers]')).click()
            })
            .then(() => {
                driver.wait(until.elementLocated(By.css('span.select2-selection__arrow')), 5000)
            })
            .then(() => {
                return driver.findElement(By.css('span.select2-selection__arrow'))
            })
            .then((locationArrow) => {
                driver.executeScript('arguments[0].scrollIntoView(true);', locationArrow);
                return locationArrow
            })
            .then((locationArrow) => {
                locationArrow.click()
            })
            .then(() => {
                driver.findElement(By.css('li[id *= -Minsk')).click()
            })
            .then(() => {
                return driver.findElement(By.css('div.selected-params')).click();
            })
            .then(() => {
                return driver.findElement(By.xpath('//span[contains(text(), \'Management\')]')).click()

            })
            .then((skillsArrow) => {
                return driver.findElement(By.css('div.selected-params')).click();
            })
            .then(() => {
                return driver.findElement(By.css('ul.selected-items li[data-value=\'Management\']c'));
            })
            .then((managementItem) => {
                console.log(managementItem)
                expect(managementItem).not.null()
            })
            .then(() => driver.quit())
    });
});