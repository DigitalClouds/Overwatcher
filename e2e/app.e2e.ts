import { OverwatcherPage } from './app.po';

describe('overwatcher App', function() {
  let page: OverwatcherPage;

  beforeEach(() => {
    page = new OverwatcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('overwatcher works!');
  });
});
