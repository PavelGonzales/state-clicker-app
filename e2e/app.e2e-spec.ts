import { StateClickerAppPage } from './app.po';

describe('state-clicker-app App', function() {
  let page: StateClickerAppPage;

  beforeEach(() => {
    page = new StateClickerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
