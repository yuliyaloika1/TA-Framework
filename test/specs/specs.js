const {
    expect
} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const {
    browser
} = require('protractor');


describe('Results of skill search', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });
    it('selecting management positions', async function () { 
        await PageFactory.getPage('Careers').open();
        await PageFactory.getPage('Careers').acceptCookieAction();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').inputAction();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getLocationDropDownAction();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').selectLocation('Minsk');
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getSkillsAction();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getManagementAction();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getSkillsAction();
        await PageFactory.getPage('Careers').wait(1000);

    });
});