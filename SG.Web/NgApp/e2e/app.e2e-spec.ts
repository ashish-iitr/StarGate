import { ValetLivingPage } from './app.po';

describe('valet-living App', () => {
  let page: ValetLivingPage;

  beforeEach(() => {
    page = new ValetLivingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
