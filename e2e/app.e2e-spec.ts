import { AngularProyectoPage } from './app.po';

describe('angular-proyecto App', function() {
  let page: AngularProyectoPage;

  beforeEach(() => {
    page = new AngularProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
