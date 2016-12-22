import { LandingPagePage } from './app.po';

describe('landing-page App', function() {
  let page: LandingPagePage;

  beforeEach(() => {
    page = new LandingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
