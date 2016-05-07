import { TconfDemoPage } from './app.po';

describe('tconf-demo App', function() {
  let page: TconfDemoPage;

  beforeEach(() => {
    page = new TconfDemoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tconf-demo works!');
  });
});
