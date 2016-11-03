import { KaylaAngularPage } from './app.po';

describe('kayla-angular App', function() {
  let page: KaylaAngularPage;

  beforeEach(() => {
    page = new KaylaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
