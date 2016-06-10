export class OverwatcherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('overwatcher-app h1')).getText();
  }
}
