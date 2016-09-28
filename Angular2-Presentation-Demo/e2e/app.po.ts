import { browser, element, by } from 'protractor/globals';

export class Angular2PresentationDemoPage {
  navigateTo() {
    return browser.get('/');
  }
  
  navigateToLogin() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.css('app-home-page h1')).getText();
  }
}
