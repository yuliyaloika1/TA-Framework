const PageFactory = require("../utils/page_objects/pageFactory");
const {protractor, browser, Key} = require('protractor');
const EC = protractor.ExpectedConditions;

describe('a test using js executor',  function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('should scroll to the image and click on it', async function() {
        await PageFactory.getPage('Insights').open();
        let element = browser.element(by.xpath('//*[text()=\'User Enablement as an Ongoing Engagement\']'));
        await PageFactory.getPage('Insights').scrollToImage(element);
        await PageFactory.getPage('Insights').wait(1000);
        await PageFactory.getPage('Insights').clickImage(element);
        await PageFactory.getPage('Insights').wait(1000);
    });
});