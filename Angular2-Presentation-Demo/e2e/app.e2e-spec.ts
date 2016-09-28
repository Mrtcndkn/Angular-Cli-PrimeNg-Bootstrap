import { Angular2PresentationDemoPage } from './app.po';

import { browser, element, by } from 'protractor/globals';

describe('angular2-presentation-demo App', function() {
  let page: Angular2PresentationDemoPage;

  beforeEach(() => {
    page = new Angular2PresentationDemoPage();
  });

  it('should display message saying Welcome To Home Page!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome To Home Page!');
  });
});

describe('login page', function() {
    let page: Angular2PresentationDemoPage;

    beforeEach(() => {
      page = new Angular2PresentationDemoPage();
    });
    
    it('should render login page', function() {
      
      page.navigateToLogin();
      // Checking the current url
      let currentUrl = browser.driver.getCurrentUrl();
      expect(currentUrl).toMatch('/login');
    });
    
    it('should sign in', function() {

      // Find page elements
      let userNameField = browser.driver.findElement(by.id('username'));
      let userPassField = browser.driver.findElement(by.id('password'));
      let userLoginBtn  = browser.driver.findElement(by.id('loginbtn'));

      // Fill input fields
      userNameField.sendKeys('mertcan.diken@primetek.com');
      userPassField.sendKeys('123');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('mertcan.diken@primetek.com');
      expect(userPassField.getAttribute('value')).toEqual('123');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/crud');
    });
    });
});
