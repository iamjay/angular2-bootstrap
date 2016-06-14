export class WhatispendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('whatispend-app h1')).getText();
  }
}
