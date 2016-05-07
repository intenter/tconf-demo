export class TconfDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tconf-demo-app h1')).getText();
  }
}
