const ContactUs = require("./contact_us/contact_us");
const InsightsPage = require("./insights_page/insights_page");
const BasePage = require("./base_page/base_page");
const CareersPage = require("./careers_page/careers_page");
const HomePage = require("./home_page/home_page");


class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Contact":
                return new ContactUs();
            case "Careers":
                return new CareersPage();
            case "Insights":
                return new InsightsPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;