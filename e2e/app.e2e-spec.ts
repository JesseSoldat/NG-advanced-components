import { AdvanceAppPage } from './app.po';

describe('advance-app App', function() {
  let page: AdvanceAppPage;

  beforeEach(() => {
    page = new AdvanceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
