import { AlllawyersPage } from './app.po';

describe('alllawyers App', function() {
  let page: AlllawyersPage;

  beforeEach(() => {
    page = new AlllawyersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
