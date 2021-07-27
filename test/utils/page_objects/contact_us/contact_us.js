const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class ContactUs extends BasePage {
  constructor() {
    super();
    this.url = "https://www.epam.com/about/who-we-are/contact";
    this.sections = new Collection("Sections", "div.section-ui__parallax-wrapper ");
  };
  open() {
    return super.open(this.url);


  };

  module.exports = ContactUs;