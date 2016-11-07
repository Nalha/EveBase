import { EvebaseAngularPage } from './app.po';

describe('evebase-angular App', function() {
  let page: EvebaseAngularPage;

  beforeEach(() => {
    page = new EvebaseAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
