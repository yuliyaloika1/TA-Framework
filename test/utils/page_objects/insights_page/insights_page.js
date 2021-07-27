const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const logger = require('../../../config/logger.config.js');

class InsightsPage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.epam.com/insights";
    this.insightsTitle = new Element("Insights Title", ".title--mixed-case");
  };
  open() {
    return super.open(this.url);
  }
  scrollToImage(element) {
    logger.info(`Scrolling to appropriate element`)
    browser.executeScript('arguments[0].scrollIntoView();', element);
  }
  clickImage(element) {
    logger.info(`Clicking appropriate element`)
    browser.executeScript('arguments[0].click();', element);
  }
}

module.exports = InsightsPage;